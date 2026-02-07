import type { Member } from '@/types/member';
import type { News } from '@/types/news';

// メンバーモックデータ
export const mockMembers: Member[] = [
  {
    id: '1',
    name: '佐藤 昇',
    position: '理事',
    imageUrl: '/images/member-placeholder.png',
    comment: 'デジタル推進局全体の方針策定と組織運営を統括し、医療現場のDX推進を牽引しています。',
    order: 1,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: '川井 康平',
    position: '',
    imageUrl: '/images/member-placeholder.png',
    comment: 'BizRobo!を活用したRPA開発を担当し、医療事務や管理業務の自動化に取り組んでいます。',
    order: 2,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '3',
    name: '松田 和也',
    position: '',
    imageUrl: '/images/member-placeholder.png',
    comment: 'データ分析・機械学習を活用し、医療データの可視化や予測モデルの構築を行っています。',
    order: 3,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '4',
    name: '皆田 渉平',
    position: '',
    imageUrl: '/images/member-placeholder.png',
    comment: 'DXプロジェクト全体の進行管理を担い、各施策のスケジュール調整や関係部署との連携を推進しています。',
    order: 4,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

// ニュースモックデータ
export const mockNews: News[] = [
  {
    id: '1',
    title: '第2回 ヘルスケアDXカンファレンスを開催します',
    category: 'イベント',
    publishedAt: '2026-01-28T10:00:00.000Z',
    content: '第2回ヘルスケアDXカンファレンスを開催いたします。医療・介護現場におけるデジタル活用の最新事例を共有する場として、皆様のご参加をお待ちしております。',
    link: '/conference',
    createdAt: '2026-01-28T10:00:00.000Z',
    updatedAt: '2026-01-28T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'DXアシスタントCUPを開催します',
    category: 'イベント',
    publishedAt: '2026-01-15T10:00:00.000Z',
    content: '職員を対象としたDXアシスタントCUPを開催いたします。日頃の業務改善アイデアを競い合い、現場発のDX推進を盛り上げます。',
    createdAt: '2026-01-15T10:00:00.000Z',
    updatedAt: '2026-01-15T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'デジタル推進局 公式ウェブサイトを公開しました',
    category: 'お知らせ',
    publishedAt: '2025-12-20T09:00:00.000Z',
    content: 'この度、敬和会デジタル推進局の公式ウェブサイトを公開いたしました。活動内容や最新情報を随時発信してまいります。',
    createdAt: '2025-12-20T09:00:00.000Z',
    updatedAt: '2025-12-20T09:00:00.000Z',
  },
];
