import { Container } from '@/components/common/layout';
import { AboutHero, AboutContent, AboutCTA } from '@/components/pages/about';

export default function AboutPage() {
  return (
    <Container size="lg" padding="sm">
      <AboutHero />
      <AboutContent />
      <AboutCTA />
    </Container>
  );
}