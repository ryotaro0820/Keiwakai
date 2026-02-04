const missions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'イノベーション推進',
    description: '最新技術の調査・研究を行い、医療現場への適用可能性を検討。実証実験を通じて、効果的なソリューションを見出します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: '業務効率化',
    description: 'RPAやAIを活用した業務自動化により、医療スタッフの負担を軽減。本来の医療業務に集中できる環境を整備します。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '人材育成',
    description: 'DXセミナーや勉強会を通じて、デジタルリテラシーの向上を支援。全職員がテクノロジーを活用できる組織を目指します。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0056b3] font-medium text-sm tracking-wider uppercase">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            デジタル推進局とは
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#0056b3] mx-auto rounded-full" />
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed">
            社会医療法人敬和会 デジタル推進局は、医療DX（デジタルトランスフォーメーション）を
            推進する専門部署として2023年に設立されました。
            <br /><br />
            「医療の未来を、デジタルで拓く」をミッションに掲げ、
            最新のテクノロジーを活用した医療サービスの向上と、
            職員の働き方改革を両立させる取り組みを行っています。
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0056b3]/10 rounded-xl flex items-center justify-center text-[#0056b3] mb-6">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
