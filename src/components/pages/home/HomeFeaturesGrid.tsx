import { Heading, Paragraph } from '@/components/common/text';
import { Grid, Card } from '@/components/common/layout';

export default function HomeFeaturesGrid() {
  const features = [
    {
      icon: '🍟',
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, locally-sourced ingredients to create our delicious burgers and sides.'
    },
    {
      icon: '⚡', 
      title: 'Fast Service',
      description: 'Quick preparation without compromising quality. Get your meal in minutes, not hours.'
    },
    {
      icon: '🚗',
      title: 'Drive-Thru Available', 
      description: 'Convenient drive-thru service at most locations for when you\'re on the go.'
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