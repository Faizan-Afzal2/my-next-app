import { Container } from '@/components/common/layout';
import { HomeHero, HomeFeaturesGrid, HomeProjectInfo } from '@/components/pages/home';

export default function Home() {
  return (
    <Container size="lg" padding="md">
      <HomeHero />
      <HomeFeaturesGrid />
      <HomeProjectInfo />
    </Container>
  );
}