import Link from 'next/link';
import type { News } from '@/types/news';

type NewsProps = {
  news: News[];
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

export default function NewsSection({ news }: NewsProps) {
  return (
    <section id="news" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0056b3] font-medium text-sm tracking-wider uppercase">News</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            新着情報
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#0056b3] mx-auto rounded-full" />
        </div>

        {/* News List */}
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-100">
            {news.map((item) => {
              const content = (
                <div className="flex items-center gap-3">
                  {/* Date */}
                  <time className="text-gray-500 text-sm whitespace-nowrap flex-shrink-0" dateTime={item.publishedAt}>
                    {formatDate(item.publishedAt)}
                  </time>

                  {/* Category */}
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="flex-1 text-gray-900 font-medium group-hover:text-[#0056b3] transition-colors flex items-center gap-2 min-w-0">
                    <span className="truncate">{item.title}</span>
                    {item.link && (
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </h3>
                </div>
              );

              return item.link ? (
                <Link
                  key={item.id}
                  href={item.link}
                  className="block py-6 first:pt-0 last:pb-0 group hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={item.id}
                  className="py-6 first:pt-0 last:pb-0 group"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#0056b3] font-medium hover:underline"
          >
            すべての新着情報を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
