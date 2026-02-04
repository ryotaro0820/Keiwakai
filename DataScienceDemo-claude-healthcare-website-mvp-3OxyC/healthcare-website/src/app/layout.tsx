import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "敬和会 デジタル推進局 | 医療の未来を、デジタルで拓く",
  description: "社会医療法人敬和会 デジタル推進局の公式ウェブサイト。最新のテクノロジーで医療現場の課題を解決し、より良い医療サービスの実現を目指します。",
  keywords: ["敬和会", "デジタル推進局", "医療DX", "RPA", "BizRobo", "モバイルカルテ"],
  openGraph: {
    title: "敬和会 デジタル推進局 | 医療の未来を、デジタルで拓く",
    description: "社会医療法人敬和会 デジタル推進局の公式ウェブサイト",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
