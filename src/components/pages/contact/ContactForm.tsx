'use client';

import { useState } from 'react';
import { Stack } from '@/components/common/layout';
import { FormField, Input, Textarea } from '@/components/common/forms';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is just a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="vertical" spacing="lg">
        <FormField label="Name" htmlFor="name" required>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Email" htmlFor="email" required>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Message" htmlFor="message" required>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>

        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Stack>
    </form>
  );
}