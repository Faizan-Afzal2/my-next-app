import { ReactNode } from 'react';
import { Label } from '@/components/common/text';
import { Stack } from '@/components/common/layout';

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export default function FormField({ 
  label,
  htmlFor,
  required = false,
  error,
  children,
  className = ''
}: FormFieldProps) {
  return (
    <Stack direction="vertical" spacing="xs" className={className}>
      <Label 
        htmlFor={htmlFor} 
        required={required}
        variant={error ? 'error' : 'default'}
      >
        {label}
      </Label>
      {children}
      {error && (
        <span className="text-destructive text-sm">{error}</span>
      )}
    </Stack>
  );
}