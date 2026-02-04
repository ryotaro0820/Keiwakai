const activities = [
  {
    title: 'BizRobo!',
    subtitle: 'RPA による業務自動化',
    description: 'BizRobo!を活用したRPA（ロボティック・プロセス・オートメーション）により、定型的な事務作業を自動化。月間500時間以上の業務時間削減を実現しています。',
    features: ['請求業務の自動化', 'データ入力の効率化', '帳票作成の自動化'],
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'モバイルカルテ',
    subtitle: 'スマートデバイス活用',
    description: 'タブレット端末を活用したモバイルカルテシステムを導入。ベッドサイドでのリアルタイム記録により、医療の質と効率を向上させています。',
    features: ['ベッドサイド記録', 'バイタルサイン入力', '薬剤投与記録'],
    color: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'DXセミナー',
    subtitle: '人材育成・啓発活動',
    description: '職員向けのDXセミナーや勉強会を定期開催。デジタルリテラシーの向上と、現場発のDXアイデア創出を支援しています。',
    features: ['月次勉強会', 'ハンズオン研修', '外部講師招聘'],
    color: 'from-violet-500 to-violet-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0056b3] font-medium text-sm tracking-wider uppercase">Activities</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            活動内容
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#0056b3] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            デジタル推進局では、3つの主要プロジェクトを中心に医療DXを推進しています。
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${activity.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">{activity.subtitle}</p>
                    <h3 className="text-2xl font-bold mt-1">{activity.title}</h3>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3">
                    {activity.icon}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activity.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {activity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#0056b3] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
