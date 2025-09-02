import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error';
  fullWidth?: boolean;
}

export default function Input({ 
  variant = 'default',
  fullWidth = true,
  className = '',
  ...props 
}: InputProps) {
  const variantClasses = {
    default: 'border-border focus:ring-ring focus:border-transparent',
    error: 'border-destructive focus:ring-destructive focus:border-transparent'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const baseClasses = 'px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 transition-colors';
  const combinedClasses = `${baseClasses} ${widthClass} ${variantClasses[variant]} ${className}`;
  
  return (
    <input className={combinedClasses} {...props} />
  );
}