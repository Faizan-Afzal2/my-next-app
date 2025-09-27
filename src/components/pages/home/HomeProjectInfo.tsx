import Link from 'next/link';
import { Heading, Paragraph, Text } from '@/components/common/text';
import { Grid, Card, Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

export default function HomeProjectInfo() {
  const leftFeatures = [
    '100% Beef Patties',
    'Fresh Lettuce & Tomatoes', 
    'Artisan Buns Baked Daily',
    'Secret Signature Sauce'
  ];
  
  const rightFeatures = [
    'Multiple Locations',
    'Drive-Thru Service',
    'Online Ordering', 
    'Catering Available'
  ];

  return (
    <Stack direction="vertical" spacing="xl">
      {/* Action Buttons */}
      <Stack direction="horizontal" spacing="md" justify="center" wrap>
        <Link href="/menu">
          <Button variant="primary" size="lg">
            View Menu
          </Button>
        </Link>
        <Link href="/locations">
          <Button variant="secondary" size="lg">
            Find Location
          </Button>
        </Link>
      </Stack>

      {/* Project Features */}
      <Card variant="elevated" padding="lg" className="bg-secondary">
        <Heading level={2} variant="primary" align="center" className="mb-6">
          What Makes Us Special
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