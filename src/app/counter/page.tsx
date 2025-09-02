'use client';

import { Container } from '@/components/common/layout';
import { 
  CounterPageHeader, 
  CounterDisplay, 
  CounterControls, 
  CounterEducation 
} from '@/components/pages/counter';

export default function CounterPage() {
  return (
    <Container size="lg" padding="md">
      <CounterPageHeader />
      <CounterDisplay />
      <CounterControls />
      <CounterEducation />
    </Container>
  );
}