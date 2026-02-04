import Link from "next/link";
import { getNews } from "@/lib/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新着情報 | 敬和会 デジタル推進局",
  description: "敬和会デジタル推進局からの最新のお知らせ、イベント情報、プレスリリースをご覧いただけます。",
};

const categoryColors: Record<string, string> = {
  'お知らせ': 'bg-blue-100 text-blue-700',
  'イベント': 'bg-green-100 text-green-700',
  'プレスリリース': 'bg-purple-100 text-purple-700',
  'レポート': 'bg-orange-100 text-orange-700',
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function NewsPage() {
  const newsResponse = await getNews({ limit: 100 });

  return (
    <div className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0056b3] to-[#0077e6] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            新着情報
          </h1>
          <p className="mt-4 text-blue-100 text-lg">
            デジタル推進局からの最新情報をお届けします
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#0056b3] transition-colors">
              ホーム
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">新着情報</span>
          </nav>
        </div>
      </div>

      {/* News List */}
      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0 divide-y divide-gray-100">
            {newsResponse.contents.map((item) => (
              <article
                key={item.id}
                className="py-8 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-3">
                  {/* Date & Category */}
                  <div className="flex items-center gap-3">
                    <time className="text-gray-500 text-sm" dateTime={item.publishedAt}>
                      {formatDate(item.publishedAt)}
                    </time>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 hover:text-[#0056b3] transition-colors">
                    {item.title}
                  </h2>

                  {/* Content Preview */}
                  {item.content && (
                    <p className="text-gray-600 line-clamp-2">
                      {item.content}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {newsResponse.contents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">新着情報はありません。</p>
            </div>
          )}
        </div>
      </div>

      {/* Back to Top */}
      <div className="bg-gray-50 py-12">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0056b3] font-medium hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
