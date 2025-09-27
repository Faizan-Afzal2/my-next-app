import { Container } from '@/components/common/layout';
import { PortfolioHero } from '@/components/pages/portfolio';

export default function PortfolioPage() {
  return (
    <Container size="lg" padding="md">
      <PortfolioHero />
    </Container>
  );
}