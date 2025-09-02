import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function ApiDemoHeader() {
  return (
    <Stack direction="vertical" spacing="lg" align="center" className="text-center mb-12">
      <Heading level={1} variant="primary" align="center">
        API Management with Zustand
      </Heading>
      <Paragraph variant="lead" align="center" className="max-w-3xl">
        Complete CRUD operations using Zustand for state management and JSONPlaceholder API for demo data.
      </Paragraph>
    </Stack>
  );
}