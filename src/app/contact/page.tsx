'use client';

import { Container } from '@/components/common/layout';
import { ContactHero, ContactForm } from '@/components/pages/contact';

export default function ContactPage() {
  return (
    <Container size="md" padding="sm">
      <ContactHero />
      <ContactForm />
    </Container>
  );
}