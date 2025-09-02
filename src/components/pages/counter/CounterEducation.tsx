import { Heading, Paragraph, Text } from '@/components/common/text';
import { Grid, Card, Stack } from '@/components/common/layout';

export default function CounterEducation() {
  const howItWorksPoints = [
    'Store holds the count value',
    'Components subscribe to state changes',
    'Actions update the store',
    'UI automatically re-renders',
    'No prop drilling needed!'
  ];

  const benefitsPoints = [
    'Simple, minimal API',
    'TypeScript-first design', 
    'No providers needed',
    'Great performance',
    'Easy to test'
  ];

  const codeExample = `// 1. Import the store hook
import { useCounterStore } from '@/store/counter-store';

// 2. Subscribe to state in your component
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);

// 3. Use in your JSX
<p>Count: {count}</p>
<button onClick={increment}>+1</button>`;

  return (
    <Stack direction="vertical" spacing="lg">
      {/* How it Works & Benefits */}
      <Grid cols={2} gap="lg">
        <Card variant="default" padding="lg" className="bg-secondary">
          <Heading level={3} variant="primary" className="mb-4">
            🧠 How It Works
          </Heading>
          <Stack direction="vertical" spacing="sm">
            {howItWorksPoints.map((point, index) => (
              <Text key={index} variant="muted" size="sm">
                • {point}
              </Text>
            ))}
          </Stack>
        </Card>

        <Card variant="default" padding="lg" className="bg-secondary">
          <Heading level={3} variant="primary" className="mb-4">
            ✨ Zustand Benefits
          </Heading>
          <Stack direction="vertical" spacing="sm">
            {benefitsPoints.map((point, index) => (
              <Text key={index} variant="muted" size="sm">
                • {point}
              </Text>
            ))}
          </Stack>
        </Card>
      </Grid>

      {/* Code Example */}
      <Card variant="default" padding="lg">
        <Heading level={3} variant="primary" className="mb-4">
          📝 Code Example
        </Heading>
        <Card variant="ghost" padding="md" className="bg-muted">
          <Text 
            as="div" 
            variant="muted" 
            size="sm" 
            className="font-mono overflow-x-auto whitespace-pre"
          >
            {codeExample}
          </Text>
        </Card>
      </Card>
    </Stack>
  );
}