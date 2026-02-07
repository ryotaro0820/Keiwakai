import Link from 'next/link';

export default function ConferencePage() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0056b3] via-[#0077cc] to-[#00a6ec] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-white/80 text-sm font-medium mb-4">2026年2月26日（木）開催</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            第2回 ヘルスケアDX<br className="sm:hidden" />カンファレンス
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            医療の現場は今、デジタル技術の進化により大きな転換期を迎えています。
            第2回ヘルスケアDXカンファレンスでは、医療・介護・行政・ITの最前線で活躍する実践者が集い、
            現場発のDX事例やこれからの医療経営・業務改革のヒントを共有します。
          </p>
        </div>

        {/* Purpose */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-[#0056b3] rounded-full"></span>
            開催趣旨
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本カンファレンスは、単なるIT導入の紹介にとどまらず、「現場で使われ、成果につながるDX」をテーマに、
            医療の質向上、業務効率化、人材育成、経営改善をどのように実現するかを多角的に議論することを目的としています。
          </p>
        </div>

        {/* Target Audience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-[#0056b3] rounded-full"></span>
            このような方におすすめです
          </h2>
          <ul className="space-y-3">
            {[
              '医療機関・介護施設でDXや業務改善を担当している方',
              '病院経営、部門マネジメントに関わる管理職の方',
              '医療情報、データ活用、AIに関心のある医療従事者',
              '現場主導の改善事例を学びたい方',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg className="w-6 h-6 text-[#0056b3] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Program */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-8 bg-[#0056b3] rounded-full"></span>
            主なプログラム内容（予定）
          </h2>
          <ul className="space-y-3">
            {[
              '医療現場におけるDX最新動向',
              '病院・施設における実践的DX事例紹介',
              'データ活用・AIによる医療の質と経営の改善',
              '人材育成と組織変革を支えるDXの考え方',
              'パネルディスカッション／意見交換',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-[#0056b3]/10 text-[#0056b3] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Event Details */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-[#0056b3] rounded-full"></span>
            開催概要
          </h2>
          <dl className="space-y-4">
            {[
              { label: 'イベント名', value: '第2回 ヘルスケアDXカンファレンス' },
              { label: '開催日', value: '2026年2月26日（木）' },
              { label: '開催形式', value: '現地開催／オンライン配信（予定）' },
              { label: '参加費', value: '無料' },
              { label: '主催', value: '社会医療法人敬和会　デジタル推進局' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="font-medium text-gray-900 sm:w-32 flex-shrink-0">{item.label}</dt>
                <dd className="text-gray-700">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-[#0056b3] rounded-full"></span>
            お問い合わせ
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="font-medium">ヘルスケアDXカンファレンス運営事務局</p>
            <p>敬和会 デジタル推進局 内</p>
            <p>担当：皆田 渉平</p>
            <p>
              E-mail：
              <a href="mailto:minata2480@keiwakai.oita.jp" className="text-[#0056b3] hover:underline">
                minata2480@keiwakai.oita.jp
              </a>
            </p>
            <p>電話番号：097-576-7681</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#news"
            className="inline-flex items-center gap-2 text-[#0056b3] hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
