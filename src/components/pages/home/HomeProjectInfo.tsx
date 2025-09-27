import Link from 'next/link';
import { Heading, Paragraph, Text } from '@/components/common/text';
import { Grid, Card, Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

export default function HomeProjectInfo() {
  const leftFeatures = [
    'Next.js 15 with App Router',
    'TypeScript for type safety', 
    'Tailwind CSS for styling',
    'Reusable UI components'
  ];
  
  const rightFeatures = [
    'Custom React hooks',
    'Utility functions',
    'Organized file structure', 
    'Modern development patterns'
  ];

  return (
    <Stack direction="vertical" spacing="xl">
      {/* Action Buttons */}
      <Stack direction="horizontal" spacing="md" justify="center" wrap>
        <Link href="/about">
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </Link>
      </Stack>

      {/* Project Features */}
      <Card variant="elevated" padding="lg" className="bg-secondary">
        <Heading level={2} variant="primary" align="center" className="mb-6">
          Project Features
        </Heading>
        
        <Grid cols={2} gap="lg">
          <Stack direction="vertical" spacing="sm">
            {leftFeatures.map((feature, index) => (
              <Stack key={index} direction="horizontal" spacing="sm" align="center">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <Text variant="muted">{feature}</Text>
              </Stack>
            ))}
          </Stack>
          
          <Stack direction="vertical" spacing="sm">
            {rightFeatures.map((feature, index) => (
              <Stack key={index} direction="horizontal" spacing="sm" align="center">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <Text variant="muted">{feature}</Text>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Card>
    </Stack>
  );
}