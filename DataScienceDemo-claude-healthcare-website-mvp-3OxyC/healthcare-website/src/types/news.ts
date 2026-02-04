// microCMSのニューススキーマに対応する型定義
export type NewsCategory = 'お知らせ' | 'イベント' | 'プレスリリース' | 'レポート';

export type News = {
  id: string;
  title: string;
  category: NewsCategory;
  publishedAt: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
};

export type NewsListResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};
