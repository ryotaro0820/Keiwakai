export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-[#0056b3] to-[#003d7a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-blue-200 font-medium text-sm tracking-wider uppercase">Contact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            お問い合わせ
          </h2>
          <div className="mt-4 w-20 h-1 bg-white/30 mx-auto rounded-full" />

          {/* Description */}
          <p className="mt-8 text-blue-100 text-lg leading-relaxed">
            デジタル推進局へのお問い合わせ、DX推進に関するご相談、
            <br className="hidden sm:block" />
            協業のご提案などがございましたら、お気軽にご連絡ください。
          </p>

          {/* Contact Options */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Google Form Button */}
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0056b3] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              お問い合わせフォーム
            </a>

            {/* Email Button */}
            <a
              href="mailto:dx-promotion@keiwakai.example.jp"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/50 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              メールで問い合わせ
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm">
              ※ お問い合わせ内容により、ご返信までにお時間をいただく場合がございます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
