import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Container({ 
  children,
  size = 'lg',
  padding = 'md',
  className = ''
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-6',
    md: 'px-4 py-12',
    lg: 'px-6 py-16',
    xl: 'px-8 py-20'
  };
  
  const baseClasses = 'mx-auto';
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}