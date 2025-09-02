import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function ServicesHero() {
  return (
    <Stack direction="vertical" spacing="md">
      <Heading level={1} variant="primary">
        Services Page
      </Heading>
      <Paragraph variant="muted">
        Services content will be displayed here
      </Paragraph>
    </Stack>
  );
}