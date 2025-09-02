import { useCounterStore } from '@/store/counter-store';
import { Heading, Text } from '@/components/common/text';
import { Card, Stack } from '@/components/common/layout';

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <Card variant="default" padding="lg" className="mb-8">
      <Stack direction="vertical" spacing="lg" align="center">
        <Heading level={2} variant="primary" align="center">
          Current Count
        </Heading>
        
        <Text 
          variant="primary" 
          size="xl" 
          weight="bold" 
          className="text-6xl"
        >
          {count}
        </Text>
        
        <Stack direction="horizontal" spacing="md" wrap justify="center">
          <Text variant="muted" size="sm">
            Even: {count % 2 === 0 ? '✅' : '❌'}
          </Text>
          <Text variant="muted" size="sm">
            Positive: {count > 0 ? '✅' : '❌'}
          </Text>
          <Text variant="muted" size="sm">
            Zero: {count === 0 ? '✅' : '❌'}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}