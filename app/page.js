import Experience from "@/components/sphere/Experience";
import Above from "@/components/above";
import getPortfolio from "@/lib/sanity/getPortfolio";
import getAbout from "@/lib/sanity/getIntro";
import Card from "@/components/portfolio/Card";
import About from "@/components/about";

export default async function Home() {
  const portfolio = await getPortfolio();
  const about = await getAbout();
  return (
    <main>
      <Experience />
      <Above />
      <div className="h-screen"></div>
      {/* portfolio */}
      <ul className="grid h-screen grid-cols-3 gap-4">
        {portfolio.map((item) => {
          return <Card key={item.slug} item={item} />;
        })}
      </ul>
      {/* about */}
      <ul>
        {about.map((item, index) => {
          return <About key={index} item={item} />;
        })}
      </ul>
    </main>
  );
}
