// microCMSのメンバースキーマに対応する型定義
export type Member = {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  comment: string;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type MemberListResponse = {
  contents: Member[];
  totalCount: number;
  offset: number;
  limit: number;
};
