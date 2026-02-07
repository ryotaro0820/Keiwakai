import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 本番環境では認証をスキップ
  const basicAuthUser = process.env.BASIC_AUTH_USER;
  const basicAuthPassword = process.env.BASIC_AUTH_PASSWORD;

  if (!basicAuthUser || !basicAuthPassword) {
    return NextResponse.next();
  }

  // 静的ファイルはスキップ
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // ファイル拡張子があるもの
  ) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    try {
      const encoded = authHeader.split(' ')[1];
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
      const [username, password] = decoded.split(':');

      if (username === basicAuthUser && password === basicAuthPassword) {
        return NextResponse.next();
      }
    } catch {
      // ignore
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Keiwakai Test"',
    },
  });
}

export const config = {
  matcher: ['/', '/news'],
};
