import HomeHero from "../components/home/HomeHero";
import FeaturedStrip from "../components/home/FeaturedStrip";
import HomeFeed from "../components/home/HomeFeed";
import PageContainer from "../components/layout/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <HomeHero />
      <FeaturedStrip />
      <HomeFeed />
    </PageContainer>
  );
}
