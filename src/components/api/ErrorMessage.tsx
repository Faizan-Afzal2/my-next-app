/**
 * ErrorMessage Component
 * 
 * A reusable error display component for API operations.
 * Uses the new color system and provides retry functionality.
 */

import Button from '@/components/ui/Button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

export default function ErrorMessage({ 
  message, 
  onRetry, 
  showRetry = true 
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center mr-3">
          <span className="text-destructive-foreground text-sm font-bold">!</span>
        </div>
        <p className="text-destructive font-medium">Error</p>
      </div>
      
      <p className="text-muted-foreground text-center mb-4">{message}</p>
      
      {showRetry && onRetry && (
        <Button 
          onClick={onRetry} 
          variant="secondary" 
          size="sm"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}