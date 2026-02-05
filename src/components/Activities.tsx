const activities = [
  {
    title: '現場デリバリー',
    subtitle: 'オンサイト DX コンサルティング',
    description: '各部署・病棟へ直接足を運び、現場スタッフの声を聞きながら業務課題を洗い出します。机上の提案ではなく、実際のワークフローに寄り添ったDX施策を現場と一緒に作り上げるハンズオン型のコンサルティングです。',
    features: ['現場ヒアリングによる課題抽出', '業務フロー分析と改善提案', 'デジタルツール導入の伴走支援'],
    color: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'おうちデリバリー',
    subtitle: 'IT スキルアップ研修',
    description: '職員一人ひとりのITリテラシー向上を目的とした研修プログラムを提供。基本的なPC操作から業務システムの活用法まで、受講者のレベルに合わせた丁寧な指導で、組織全体のデジタル対応力を底上げします。',
    features: ['レベル別カリキュラムの提供', 'Excel・業務システム活用研修', 'セキュリティ・情報リテラシー教育'],
    color: 'from-violet-500 to-violet-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'RPA',
    subtitle: '業務プロセスの自動化',
    description: 'RPA（ロボティック・プロセス・オートメーション）を活用し、医療事務や管理部門の定型業務を自動化。人手に頼っていた反復作業をロボットに任せることで、職員がより創造的な業務に集中できる環境を整備しています。',
    features: ['請求・会計業務の自動処理', 'データ入力・転記作業の効率化', '帳票・レポート作成の自動化'],
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
            デジタル推進局では、3つの柱を軸に医療現場のDXを推進しています。
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
