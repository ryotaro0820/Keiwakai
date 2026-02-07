import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 本番環境では認証をスキップ
  if (process.env.VERCEL_ENV === 'production') {
    return NextResponse.next();
  }

  // Basic認証のチェック
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return new NextResponse('認証が必要です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const [scheme, encoded] = authHeader.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return new NextResponse('認証が必要です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const decoded = atob(encoded);
  const [username, password] = decoded.split(':');

  // 環境変数から認証情報を取得
  const validUsername = process.env.BASIC_AUTH_USER || 'admin';
  const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password';

  if (username !== validUsername || password !== validPassword) {
    return new NextResponse('認証に失敗しました', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
