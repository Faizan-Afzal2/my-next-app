import { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
}

export default function Stack({ 
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = ''
}: StackProps) {
  const directionClasses = {
    vertical: 'flex-col',
    horizontal: 'flex-row'
  };
  
  const spacingClasses = {
    vertical: {
      none: '',
      xs: 'space-y-1',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8'
    },
    horizontal: {
      none: '',
      xs: 'space-x-1',
      sm: 'space-x-2', 
      md: 'space-x-4',
      lg: 'space-x-6',
      xl: 'space-x-8'
    }
  };
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  };
  
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };
  
  const wrapClass = wrap ? 'flex-wrap' : '';
  
  const combinedClasses = `flex ${directionClasses[direction]} ${spacingClasses[direction][spacing]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrapClass} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}