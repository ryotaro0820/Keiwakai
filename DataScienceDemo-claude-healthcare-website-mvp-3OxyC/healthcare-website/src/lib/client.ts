/**
 * microCMS クライアント
 *
 * 現在はモックデータを返す実装ですが、
 * 本番環境では microCMS SDK を使用した実装に切り替えます。
 *
 * 本番移行時の手順:
 * 1. npm install microcms-js-sdk
 * 2. .env.local に以下を設定:
 *    - MICROCMS_SERVICE_DOMAIN=your-service-domain
 *    - MICROCMS_API_KEY=your-api-key
 * 3. このファイルの実装を microCMS SDK に置き換え
 */

import type { Member, MemberListResponse } from '@/types/member';
import type { News, NewsListResponse } from '@/types/news';
import { mockMembers, mockNews } from './mock-data';

// モックの遅延をシミュレート（本番環境では不要）
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 100));

/**
 * メンバー一覧を取得
 */
export async function getMembers(options?: {
  limit?: number;
  offset?: number;
}): Promise<MemberListResponse> {
  await simulateDelay();

  const { limit = 10, offset = 0 } = options || {};
  const sortedMembers = [...mockMembers].sort((a, b) => a.order - b.order);
  const contents = sortedMembers.slice(offset, offset + limit);

  return {
    contents,
    totalCount: mockMembers.length,
    offset,
    limit,
  };
}

/**
 * メンバー詳細を取得
 */
export async function getMemberById(id: string): Promise<Member | null> {
  await simulateDelay();
  return mockMembers.find(member => member.id === id) || null;
}

/**
 * ニュース一覧を取得
 */
export async function getNews(options?: {
  limit?: number;
  offset?: number;
}): Promise<NewsListResponse> {
  await simulateDelay();

  const { limit = 10, offset = 0 } = options || {};
  const sortedNews = [...mockNews].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const contents = sortedNews.slice(offset, offset + limit);

  return {
    contents,
    totalCount: mockNews.length,
    offset,
    limit,
  };
}

/**
 * ニュース詳細を取得
 */
export async function getNewsById(id: string): Promise<News | null> {
  await simulateDelay();
  return mockNews.find(news => news.id === id) || null;
}
