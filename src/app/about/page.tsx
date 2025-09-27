import { Container, Stack } from '@/components/common/layout';
import { 
  AboutHero, 
  AboutContent, 
  AboutFolderStructure,
  AboutComponentExamples,
  AboutBenefits,
  AboutArchitecture,
  AboutUsageGuide,
  AboutCTA 
} from '@/components/pages/about';

export default function AboutPage() {
  return (
    <Container size="xl" padding="md">
      <Stack direction="vertical" spacing="xl">
        <AboutHero />
        <AboutContent />
        <AboutFolderStructure />
        <AboutComponentExamples />
        <AboutBenefits />
        <AboutArchitecture />
        <AboutUsageGuide />
        <AboutCTA />
      </Stack>
    </Container>
  );
}