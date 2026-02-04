import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0056b3] via-[#0066cc] to-[#0077e6] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Organization Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            社会医療法人敬和会
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">医療の未来を、</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              デジタルで拓く
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            最新のテクノロジーで医療現場の課題を解決し、
            <br className="hidden sm:block" />
            より良い医療サービスの実現を目指します。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0056b3] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              私たちについて
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/50 hover:bg-white/10 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
