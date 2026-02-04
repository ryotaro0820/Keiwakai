import Link from 'next/link';

const footerLinks = [
  { href: '#about', label: 'デジタル推進局とは' },
  { href: '#activities', label: '活動内容' },
  { href: '#members', label: 'メンバー' },
  { href: '#news', label: '新着情報' },
  { href: '#contact', label: 'お問い合わせ' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0056b3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <p className="font-bold text-lg">社会医療法人敬和会</p>
                <p className="text-gray-400">デジタル推進局</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              医療の未来をデジタルで拓く。
              私たちは最新のテクノロジーを活用し、
              医療現場の課題解決と業務効率化を推進しています。
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold mb-4">サイトマップ</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 社会医療法人敬和会 デジタル推進局. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
