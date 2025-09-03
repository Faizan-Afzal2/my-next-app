import { Heading, Text } from '@/components/common/text';
import { Card, Stack, Grid } from '@/components/common/layout';

export default function AboutComponentExamples() {
  const textExamples = [
    {
      component: 'Heading',
      usage: '<Heading level={1} variant="primary">Page Title</Heading>',
      description: 'Replaces h1-h6 tags with consistent styling and variants'
    },
    {
      component: 'Paragraph', 
      usage: '<Paragraph variant="large">Important text</Paragraph>',
      description: 'Replaces p tags with size and color variants'
    },
    {
      component: 'Text',
      usage: '<Text variant="muted" size="sm">Small muted text</Text>',
      description: 'Replaces span tags with comprehensive styling options'
    }
  ];

  const layoutExamples = [
    {
      component: 'Container',
      usage: '<Container size="lg" padding="md">Page content</Container>',
      description: 'Replaces max-width divs with responsive containers'
    },
    {
      component: 'Stack',
      usage: '<Stack direction="horizontal" spacing="md">Items</Stack>',
      description: 'Replaces flex divs with spacing and alignment control'
    },
    {
      component: 'Grid',
      usage: '<Grid cols={3} gap="lg" responsive>Grid items</Grid>',
      description: 'Replaces CSS grid divs with responsive breakpoints'
    },
    {
      component: 'Card',
      usage: '<Card variant="elevated" padding="lg">Card content</Card>',
      description: 'Replaces styled divs with consistent card designs'
    }
  ];

  const pageStructureExample = `// Before: Direct HTML everywhere
export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to Next.js Learning Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive project...
        </p>
      </div>
      {/* 100+ more lines of HTML... */}
    </div>
  );
}

// After: Clean component composition
export default function HomePage() {
  return (
    <Container size="lg" padding="md">
      <HomeHero />
      <HomeFeaturesGrid />
      <HomeProjectInfo />
    </Container>
  );
}`;

  return (
    <Stack direction="vertical" spacing="xl">
      <Heading level={2} variant="primary">
        🧩 Component System Examples
      </Heading>

      {/* Text Components */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Text Components
        </Heading>
        <Grid cols={1} gap="md">
          {textExamples.map((example, index) => (
            <Card key={index} variant="default" padding="md">
              <Stack direction="vertical" spacing="sm">
                <Text variant="primary" weight="semibold">
                  {example.component}
                </Text>
                <Card variant="ghost" padding="sm" className="bg-muted">
                  <Text 
                    as="code" 
                    variant="muted" 
                    size="sm" 
                    className="font-mono"
                  >
                    {example.usage}
                  </Text>
                </Card>
                <Text variant="muted" size="sm">
                  {example.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>

      {/* Layout Components */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Layout Components
        </Heading>
        <Grid cols={1} gap="md">
          {layoutExamples.map((example, index) => (
            <Card key={index} variant="default" padding="md">
              <Stack direction="vertical" spacing="sm">
                <Text variant="primary" weight="semibold">
                  {example.component}
                </Text>
                <Card variant="ghost" padding="sm" className="bg-muted">
                  <Text 
                    as="code" 
                    variant="muted" 
                    size="sm" 
                    className="font-mono"
                  >
                    {example.usage}
                  </Text>
                </Card>
                <Text variant="muted" size="sm">
                  {example.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>

      {/* Page Structure Example */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Clean Page Structure
        </Heading>
        <Card variant="outlined" padding="lg">
          <Text 
            as="pre" 
            variant="muted" 
            size="sm" 
            className="font-mono overflow-x-auto whitespace-pre"
          >
            {pageStructureExample}
          </Text>
        </Card>
      </Stack>
    </Stack>
  );
}