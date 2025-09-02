import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function CounterPageHeader() {
  return (
    <Stack direction="vertical" spacing="lg" align="center" className="text-center mb-12">
      <Heading level={1} variant="primary" align="center">
        Zustand Counter Tutorial
      </Heading>
      <Paragraph variant="lead" align="center" className="max-w-2xl">
        Learn state management with this simple counter example using Zustand.
      </Paragraph>
    </Stack>
  );
}