import { Heading, Text } from '@/components/common/text';
import { Card, Stack } from '@/components/common/layout';

export default function AboutUsageGuide() {
  const componentUsageExample = `// Step 1: Import components from common or pages
import { Heading, Paragraph, Text } from '@/components/common/text';
import { Container, Stack, Card } from '@/components/common/layout';
import { HomeHero, HomeFeaturesGrid } from '@/components/pages/home';

// Step 2: Use components instead of HTML tags
export default function MyPage() {
  return (
    <Container size="lg" padding="md">
      {/* Use Heading instead of h1 */}
      <Heading level={1} variant="primary" align="center">
        Page Title
      </Heading>
      
      {/* Use Paragraph instead of p */}
      <Paragraph variant="large" align="center">
        This is a description paragraph
      </Paragraph>
      
      {/* Use Stack instead of flex divs */}
      <Stack direction="vertical" spacing="lg">
        
        {/* Use Card instead of styled divs */}
        <Card variant="elevated" padding="lg">
          <Heading level={2} variant="secondary">
            Section Title
          </Heading>
          <Text variant="muted">
            Some content text
          </Text>
        </Card>
        
        {/* Use page-specific components */}
        <HomeHero />
        <HomeFeaturesGrid />
      </Stack>
    </Container>
  );
}`;

  const importPatterns = `// Pattern 1: Import specific components
import { Heading, Paragraph } from '@/components/common/text';
import { Container, Stack } from '@/components/common/layout';

// Pattern 2: Import all common components
import { 
  Heading, 
  Paragraph, 
  Container, 
  Stack, 
  Card 
} from '@/components/common';

// Pattern 3: Import page-specific components
import { 
  HomeHero, 
  HomeFeaturesGrid, 
  HomeProjectInfo 
} from '@/components/pages/home';

// Pattern 4: Import from main pages index
import { HomeHero, AboutContent } from '@/components/pages';`;

  const bestPractices = [
    'Always use Container as the root layout component',
    'Use Stack for flex layouts instead of raw flex classes',
    'Use Grid for multi-column layouts with responsive breakpoints',
    'Use Card for grouped content with consistent styling',
    'Use Heading with proper levels (1-6) for semantic HTML',
    'Use Text component for inline text with variants',
    'Create page-specific components for complex sections',
    'Import only the components you need for better tree-shaking'
  ];

  return (
    <Stack direction="vertical" spacing="xl">
      <Heading level={2} variant="primary">
        📖 Usage Guide
      </Heading>

      {/* Component Usage Example */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          How to Use Components
        </Heading>
        <Card variant="outlined" padding="lg">
          <Text 
            as="pre" 
            variant="muted" 
            size="sm" 
            className="font-mono overflow-x-auto whitespace-pre"
          >
            {componentUsageExample}
          </Text>
        </Card>
      </Stack>

      {/* Import Patterns */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Import Patterns
        </Heading>
        <Card variant="outlined" padding="lg">
          <Text 
            as="pre" 
            variant="muted" 
            size="sm" 
            className="font-mono overflow-x-auto whitespace-pre"
          >
            {importPatterns}
          </Text>
        </Card>
      </Stack>

      {/* Best Practices */}
      <Stack direction="vertical" spacing="lg">
        <Heading level={3} variant="secondary">
          Best Practices
        </Heading>
        <Card variant="default" padding="lg" className="bg-secondary">
          <Stack direction="vertical" spacing="sm">
            {bestPractices.map((practice, index) => (
              <Stack key={index} direction="horizontal" spacing="sm" align="start">
                <Text variant="primary" className="mt-1">💡</Text>
                <Text variant="muted" size="sm">
                  {practice}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}