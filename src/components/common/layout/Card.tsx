import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Card({ 
  children,
  variant = 'default',
  padding = 'md',
  className = ''
}: CardProps) {
  const variantClasses = {
    default: 'bg-card border border-border',
    elevated: 'bg-card border border-border shadow-lg',
    outlined: 'bg-background border-2 border-border',
    ghost: 'bg-transparent'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };
  
  const baseClasses = 'rounded-lg';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}