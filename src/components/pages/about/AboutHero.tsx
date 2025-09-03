import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function AboutHero() {
  return (
    <Stack direction="vertical" spacing="lg" align="center" className="text-center mb-12">
      <Heading level={1} variant="primary" align="center">
        Component Architecture & Folder Structure
      </Heading>
      <Paragraph variant="lead" align="center" className="max-w-3xl">
        Learn how we've eliminated direct HTML tags and built a scalable, 
        maintainable component system for enterprise applications.
      </Paragraph>
    </Stack>
  );
}