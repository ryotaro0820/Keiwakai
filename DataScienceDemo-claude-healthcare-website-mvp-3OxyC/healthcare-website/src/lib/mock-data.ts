import type { Member } from '@/types/member';
import type { News } from '@/types/news';

// メンバーモックデータ
export const mockMembers: Member[] = [
  {
    id: '1',
    name: '山田 太郎',
    position: '局長',
    imageUrl: '/images/member-placeholder.png',
    comment: 'デジタル技術で医療現場の課題を解決し、患者様とスタッフ双方にとってより良い環境を創造します。',
    order: 1,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    name: '佐藤 花子',
    position: 'DXプランナー',
    imageUrl: '/images/member-placeholder.png',
    comment: '現場の声を大切にしながら、実現可能なDX施策を企画・推進しています。',
    order: 2,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '3',
    name: '鈴木 一郎',
    position: 'システムエンジニア',
    imageUrl: '/images/member-placeholder.png',
    comment: '安全で使いやすいシステムの構築を通じて、医療DXに貢献します。',
    order: 3,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '4',
    name: '田中 美咲',
    position: 'RPA開発担当',
    imageUrl: '/images/member-placeholder.png',
    comment: 'BizRobo!を活用した業務自動化で、スタッフの働き方改革を支援しています。',
    order: 4,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
];

// ニュースモックデータ
export const mockNews: News[] = [
  {
    id: '1',
    title: 'デジタル推進局 公式ウェブサイトを公開しました',
    category: 'お知らせ',
    publishedAt: '2026-02-01T09:00:00.000Z',
    content: 'この度、敬和会デジタル推進局の公式ウェブサイトを公開いたしました。活動内容や最新情報を随時発信してまいります。',
    createdAt: '2026-02-01T09:00:00.000Z',
    updatedAt: '2026-02-01T09:00:00.000Z',
  },
  {
    id: '2',
    title: '第3回 医療DXセミナーを開催します',
    category: 'イベント',
    publishedAt: '2026-01-25T10:00:00.000Z',
    content: '2026年3月15日に第3回医療DXセミナーを開催いたします。今回のテーマは「AIを活用した業務効率化」です。',
    createdAt: '2026-01-25T10:00:00.000Z',
    updatedAt: '2026-01-25T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'モバイルカルテ導入事例がメディアに掲載されました',
    category: 'プレスリリース',
    publishedAt: '2026-01-15T14:00:00.000Z',
    content: '当院のモバイルカルテ導入事例が医療専門誌に掲載されました。導入の経緯や効果についてご紹介しています。',
    createdAt: '2026-01-15T14:00:00.000Z',
    updatedAt: '2026-01-15T14:00:00.000Z',
  },
  {
    id: '4',
    title: 'BizRobo!による業務自動化レポートを公開',
    category: 'レポート',
    publishedAt: '2026-01-10T11:00:00.000Z',
    content: 'BizRobo!を活用した業務自動化の取り組みについて、年間レポートを公開しました。',
    createdAt: '2026-01-10T11:00:00.000Z',
    updatedAt: '2026-01-10T11:00:00.000Z',
  },
  {
    id: '5',
    title: '2025年度 活動報告書を公開しました',
    category: 'レポート',
    publishedAt: '2025-12-28T09:00:00.000Z',
    content: '2025年度のデジタル推進局の活動報告書を公開いたしました。',
    createdAt: '2025-12-28T09:00:00.000Z',
    updatedAt: '2025-12-28T09:00:00.000Z',
  },
];
