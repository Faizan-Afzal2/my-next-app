import { Heading, Text } from '@/components/common/text';
import { Card, Stack, Grid } from '@/components/common/layout';

export default function AboutArchitecture() {
  const architectureLayers = [
    {
      layer: 'Pages Layer',
      description: 'Clean page.tsx files that only import and compose components',
      example: 'src/app/about/page.tsx',
      responsibility: 'Component orchestration and routing'
    },
    {
      layer: 'Page Components',
      description: 'Page-specific components that handle page logic and state',
      example: 'src/components/pages/home/HomeHero.tsx',
      responsibility: 'Page-specific functionality and layout'
    },
    {
      layer: 'Common Components',
      description: 'Reusable UI components shared across the entire application',
      example: 'src/components/common/text/Heading.tsx',
      responsibility: 'Consistent UI elements and design system'
    },
    {
      layer: 'Store Layer',
      description: 'Zustand stores for global state management and API integration',
      example: 'src/store/users-store.ts',
      responsibility: 'State management and business logic'
    }
  ];

  const designPrinciples = [
    'No direct HTML tags in pages',
    'Component composition over configuration', 
    'Consistent prop interfaces across similar components',
    'Clear separation between layout and content components',
    'Reusable components with flexible variants',
    'Type-safe component props with TypeScript'
  ];

  return (
    <Stack direction="vertical" spacing="xl">
      <Heading level={2} variant="primary">
        🏗️ Application Architecture
      </Heading>

      {/* Architecture Layers */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Architecture Layers
        </Heading>
        <Grid cols={2} gap="lg">
          {architectureLayers.map((layer, index) => (
            <Card key={index} variant="elevated" padding="lg">
              <Stack direction="vertical" spacing="md">
                <Text variant="primary" weight="semibold" size="lg">
                  {layer.layer}
                </Text>
                <Text variant="muted" size="sm">
                  {layer.description}
                </Text>
                <Card variant="ghost" padding="sm" className="bg-muted">
                  <Text 
                    as="code" 
                    variant="muted" 
                    size="xs" 
                    className="font-mono"
                  >
                    {layer.example}
                  </Text>
                </Card>
                <Text variant="muted" size="xs" weight="medium">
                  📋 {layer.responsibility}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>

      {/* Design Principles */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Design Principles
        </Heading>
        <Card variant="default" padding="lg" className="bg-secondary">
          <Grid cols={2} gap="md">
            {designPrinciples.map((principle, index) => (
              <Stack key={index} direction="horizontal" spacing="sm" align="start">
                <Text variant="primary" className="mt-1">✓</Text>
                <Text variant="muted" size="sm">
                  {principle}
                </Text>
              </Stack>
            ))}
          </Grid>
        </Card>
      </Stack>
    </Stack>
  );
}