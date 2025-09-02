import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
}

export default function Grid({ 
  children,
  cols = 2,
  gap = 'md',
  responsive = true,
  className = ''
}: GridProps) {
  const colsClasses = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-6'
  };
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };
  
  const baseClasses = 'grid';
  const combinedClasses = `${baseClasses} ${colsClasses[cols]} ${gapClasses[gap]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}