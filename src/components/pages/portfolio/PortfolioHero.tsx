import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function PortfolioHero() {
  return (
    <Stack direction="vertical" spacing="md">
      <Heading level={1} variant="primary">
        Portfolio Page
      </Heading>
      <Paragraph variant="muted">
        Portfolio content will be displayed here
      </Paragraph>
    </Stack>
  );
}