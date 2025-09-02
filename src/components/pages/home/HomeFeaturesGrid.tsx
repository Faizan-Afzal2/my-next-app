import { Heading, Paragraph } from '@/components/common/text';
import { Grid, Card } from '@/components/common/layout';

export default function HomeFeaturesGrid() {
  const features = [
    {
      icon: '📁',
      title: 'Organized Structure',
      description: 'Learn industry-standard folder organization and component architecture patterns.'
    },
    {
      icon: '🎨', 
      title: 'Modern Styling',
      description: 'Master Tailwind CSS and responsive design principles for beautiful UIs.'
    },
    {
      icon: '⚡',
      title: 'Best Practices', 
      description: 'Implement TypeScript, custom hooks, and reusable components effectively.'
    }
  ];

  return (
    <Grid cols={3} gap="lg" className="mb-12">
      {features.map((feature, index) => (
        <Card key={index} variant="default" padding="lg">
          <Heading level={3} variant="primary" className="mb-3">
            {feature.icon} {feature.title}
          </Heading>
          <Paragraph variant="muted">
            {feature.description}
          </Paragraph>
        </Card>
      ))}
    </Grid>
  );
}