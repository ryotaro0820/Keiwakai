import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Members from "@/components/Members";
import NewsSection from "@/components/News";
import Contact from "@/components/Contact";
import { getMembers, getNews } from "@/lib/client";

export default async function Home() {
  // CMSからデータを取得（現在はモックデータ）
  const [membersResponse, newsResponse] = await Promise.all([
    getMembers(),
    getNews({ limit: 3 }),
  ]);

  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Members members={membersResponse.contents} />
      <NewsSection news={newsResponse.contents} />
      <Contact />
    </>
  );
}
