import { Heading, Paragraph, Text } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function AboutContent() {
  const learningPoints = [
    'Next.js App Router and file-based routing',
    'Server and Client Components',
    'TypeScript integration',
    'Tailwind CSS styling',
    'Component composition patterns'
  ];

  return (
    <Stack direction="vertical" spacing="lg">
      <Paragraph variant="large" className="mb-4">
        Welcome to our Next.js learning project! This application demonstrates
        modern React patterns and Next.js features.
      </Paragraph>
      
      <Stack direction="vertical" spacing="md">
        <Heading level={2} variant="primary" className="mt-8 mb-4">
          What You'll Learn
        </Heading>
        
        <Stack direction="vertical" spacing="sm" className="list-inside">
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