import { Heading, Paragraph } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

export default function HomeHero() {
  return (
    <Stack direction="vertical" spacing="lg" align="center" className="text-center mb-12">
      <Heading level={1} variant="primary" align="center">
        Welcome to Next.js Learning Hub
      </Heading>
      <Paragraph variant="lead" align="center" className="max-w-2xl">
        A comprehensive project to help interns master Next.js, React, and modern web development practices.
      </Paragraph>
    </Stack>
  );
}