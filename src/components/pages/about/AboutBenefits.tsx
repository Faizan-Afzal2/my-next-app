import { Heading, Text } from '@/components/common/text';
import { Card, Stack, Grid } from '@/components/common/layout';

export default function AboutBenefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Consistency',
      description: 'All components use the same design system and color variables'
    },
    {
      icon: '🔧',
      title: 'Maintainability', 
      description: 'Change styling once in component, updates everywhere in the app'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Reusable components reduce bundle size and improve rendering'
    },
    {
      icon: '🧪',
      title: 'Testability',
      description: 'Individual components can be unit tested in isolation'
    },
    {
      icon: '📚',
      title: 'Scalability',
      description: 'Easy to add new variants and extend existing components'
    },
    {
      icon: '🎨',
      title: 'Design System',
      description: 'Enforces consistent spacing, typography, and color usage'
    }
  ];

  return (
    <Stack direction="vertical" spacing="lg">
      <Heading level={2} variant="primary">
        ✨ Component System Benefits
      </Heading>
      
      <Grid cols={3} gap="lg">
        {benefits.map((benefit, index) => (
          <Card key={index} variant="default" padding="lg" className="text-center">
            <Stack direction="vertical" spacing="md" align="center">
              <Text size="xl" className="text-2xl">
                {benefit.icon}
              </Text>
              <Heading level={4} variant="primary">
                {benefit.title}
              </Heading>
              <Text variant="muted" size="sm" className="text-center">
                {benefit.description}
              </Text>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
}