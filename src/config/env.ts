/**
 * Environment Configuration
 * 
 * Centralized environment variable management with validation.
 * This ensures all environment variables are properly typed and validated.
 */

/**
 * Environment configuration object
 * All environment variables are accessed through this object
 * to ensure consistency and type safety.
 */
export const env = {
  // =============================================================================
  // API Configuration
  // =============================================================================
  
  /**
   * Backend API base URL
   * Points to your NestJS backend server
   */
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  
  /**
   * API request timeout in milliseconds
   */
  API_TIMEOUT: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  
  // =============================================================================
  // Application Configuration
  // =============================================================================
  
  /**
   * Current environment (development, production, etc.)
   */
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  /**
   * Frontend application URL
   */
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  
  /**
   * Check if we're in development mode
   */
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  
  /**
   * Check if we're in production mode
   */
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  
  // =============================================================================
  // Authentication Configuration
  // =============================================================================
  
  /**
   * JWT secret for client-side token validation
   */
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET || 'dev-secret-key',
  
  /**
   * Local storage key for storing auth token
   */
  TOKEN_KEY: process.env.NEXT_PUBLIC_TOKEN_KEY || 'app_token',
  
  // =============================================================================
  // Third-Party Services
  // =============================================================================
  
  /**
   * Google Analytics ID
   */
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  
  /**
   * Sentry DSN for error tracking
   */
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // =============================================================================
  // Feature Flags
  // =============================================================================
  
  /**
   * Enable/disable analytics
   */
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  
  /**
   * Enable/disable error tracking
   */
  ENABLE_ERROR_TRACKING: process.env.NEXT_PUBLIC_ENABLE_ERROR_TRACKING === 'true',
  
  /**
   * Enable/disable PWA features
   */
  ENABLE_PWA: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
} as const;

/**
 * Validate required environment variables
 * Call this function at application startup to ensure
 * all required environment variables are present.
 */
export function validateEnvironment(): void {
  const requiredVars = [
    'NEXT_PUBLIC_API_URL',
  ];
  
  const missingVars = requiredVars.filter(
    varName => !process.env[varName]
  );
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars);
    console.error('📝 Please check your .env.local file');
    
    if (env.IS_PRODUCTION) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
  } else {
    console.log('✅ All required environment variables are present');
  }
}

/**
 * Development helper to log current configuration
 * Only runs in development mode
 */
export function logEnvironmentConfig(): void {
  if (env.IS_DEVELOPMENT) {
    console.log('🔧 Environment Configuration:');
    console.log('- API URL:', env.API_URL);
    console.log('- App URL:', env.APP_URL);
    console.log('- Environment:', env.NODE_ENV);
    console.log('- Analytics:', env.ENABLE_ANALYTICS ? 'Enabled' : 'Disabled');
  }
}

/**
 * Usage in components:
 * 
 * import { env } from '@/config/env';
 * 
 * // Use in API calls
 * const apiUrl = `${env.API_URL}/users`;
 * 
 * // Feature flags
 * if (env.ENABLE_ANALYTICS) {
 *   // Initialize analytics
 * }
 * 
 * // Environment checks
 * if (env.IS_DEVELOPMENT) {
 *   console.log('Debug info');
 * }
 */