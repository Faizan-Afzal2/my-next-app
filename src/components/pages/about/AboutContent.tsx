import { Heading, Paragraph, Text } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function AboutContent() {
  const learningPoints = [
    'Advanced component composition patterns',
    'Zustand state management with API integration', 
    'TypeScript-first development approach',
    'Production-ready folder structure',
    'Reusable component design system',
    'Modern Next.js 15 and React 19 features'
  ];

  return (
    <Stack direction="vertical" spacing="lg">
      <Paragraph variant="large">
        This Next.js application demonstrates enterprise-level component architecture 
        with zero direct HTML tags. Every UI element is built using reusable, 
        type-safe components that follow modern design system principles.
      </Paragraph>
      
      <Stack direction="vertical" spacing="md">
        <Heading level={2} variant="primary">
          What You'll Learn
        </Heading>
        
        <Stack direction="vertical" spacing="sm">
          {learningPoints.map((point, index) => (
            <Stack key={index} direction="horizontal" spacing="sm" align="start">
              <Text variant="primary" size="base" className="mt-1">•</Text>
              <Text variant="default" size="base">{point}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}