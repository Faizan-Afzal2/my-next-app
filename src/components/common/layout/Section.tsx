import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'default' | 'secondary' | 'muted' | 'card';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Section({ 
  children,
  background = 'default',
  spacing = 'md',
  className = ''
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-background',
    secondary: 'bg-secondary',
    muted: 'bg-muted',
    card: 'bg-card'
  };
  
  const spacingClasses = {
    none: '',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  
  const combinedClasses = `${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`;
  
  return (
    <section className={combinedClasses}>
      {children}
    </section>
  );
}