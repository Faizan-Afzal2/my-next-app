import Button from '@/components/ui/Button';
import { Stack } from '@/components/common/layout';

export default function AboutCTA() {
  return (
    <Stack direction="horizontal" spacing="md" justify="start" className="mt-8">
      <Button variant="primary">Get Started</Button>
    </Stack>
  );
}