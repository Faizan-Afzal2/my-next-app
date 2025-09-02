/**
 * API Endpoints - Centralized Endpoint Definitions
 * 
 * This file contains all API endpoint URLs used throughout the application.
 * Centralizing endpoints makes it easier to maintain and update API routes.
 * 
 * Benefits:
 * - Single source of truth for all API routes
 * - Easy to update endpoints across the entire app
 * - Prevents typos in endpoint URLs
 * - Better organization and discoverability
 */

/**
 * User Management Endpoints
 * All endpoints related to user operations
 */
export const USER_ENDPOINTS = {
  // Basic CRUD operations
  LIST: '/users',                    // GET - Fetch all users
  CREATE: '/users',                  // POST - Create new user
  DETAIL: (id: string) => `/users/${id}`,  // GET - Fetch single user
  UPDATE: (id: string) => `/users/${id}`,  // PUT/PATCH - Update user
  DELETE: (id: string) => `/users/${id}`,  // DELETE - Remove user
  
  // Additional user operations
  SEARCH: '/users/search',           // GET - Search users
  BULK_DELETE: '/users/bulk-delete', // POST - Delete multiple users
  EXPORT: '/users/export',           // GET - Export users to CSV/Excel
} as const;

/**
 * Posts/Blog Management Endpoints
 * For content management functionality
 */
export const POST_ENDPOINTS = {
  // Basic CRUD
  LIST: '/posts',
  CREATE: '/posts',
  DETAIL: (id: string) => `/posts/${id}`,
  UPDATE: (id: string) => `/posts/${id}`,
  DELETE: (id: string) => `/posts/${id}`,
  
  // Post-specific operations
  PUBLISH: (id: string) => `/posts/${id}/publish`,
  UNPUBLISH: (id: string) => `/posts/${id}/unpublish`,
  LIKE: (id: string) => `/posts/${id}/like`,
  UNLIKE: (id: string) => `/posts/${id}/unlike`,
  
  // Comments (nested resource)
  COMMENTS: (postId: string) => `/posts/${postId}/comments`,
  ADD_COMMENT: (postId: string) => `/posts/${postId}/comments`,
} as const;

/**
 * Authentication Endpoints
 * User authentication and session management
 */
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',              // POST - User login
  LOGOUT: '/auth/logout',            // POST - User logout
  REGISTER: '/auth/register',        // POST - User registration
  REFRESH: '/auth/refresh',          // POST - Refresh access token
  FORGOT_PASSWORD: '/auth/forgot-password',  // POST - Password reset request
  RESET_PASSWORD: '/auth/reset-password',    // POST - Reset password
  VERIFY_EMAIL: '/auth/verify-email',        // POST - Email verification
  ME: '/auth/me',                    // GET - Get current user info
} as const;

/**
 * File Upload Endpoints
 * For handling file uploads (avatars, images, documents)
 */
export const UPLOAD_ENDPOINTS = {
  AVATAR: '/upload/avatar',          // POST - Upload user avatar
  IMAGE: '/upload/image',            // POST - Upload general image
  DOCUMENT: '/upload/document',      // POST - Upload document
  BULK: '/upload/bulk',              // POST - Upload multiple files
} as const;

/**
 * Analytics and Reporting Endpoints
 * For dashboard and reporting features
 */
export const ANALYTICS_ENDPOINTS = {
  DASHBOARD: '/analytics/dashboard', // GET - Dashboard summary
  USER_STATS: '/analytics/users',    // GET - User statistics
  POST_STATS: '/analytics/posts',    // GET - Post statistics
  ACTIVITY: '/analytics/activity',   // GET - Recent activity feed
} as const;

/**
 * Settings and Configuration Endpoints
 * For application settings management
 */
export const SETTINGS_ENDPOINTS = {
  APP_SETTINGS: '/settings/app',     // GET/PUT - App configuration
  USER_PREFERENCES: '/settings/preferences', // GET/PUT - User preferences
  NOTIFICATIONS: '/settings/notifications',  // GET/PUT - Notification settings
} as const;

/**
 * Helper function to build endpoint with parameters
 * Useful for creating dynamic endpoints with multiple parameters
 */
export const buildEndpoint = (template: string, params: Record<string, string>): string => {
  let endpoint = template;
  
  Object.entries(params).forEach(([key, value]) => {
    endpoint = endpoint.replace(`{${key}}`, value);
  });
  
  return endpoint;
};

/**
 * Example Usage:
 * 
 * // Basic usage
 * const endpoint = USER_ENDPOINTS.LIST; // '/users'
 * 
 * // Dynamic endpoints
 * const userDetail = USER_ENDPOINTS.DETAIL('123'); // '/users/123'
 * 
 * // Complex endpoint building
 * const customEndpoint = buildEndpoint('/users/{userId}/posts/{postId}', {
 *   userId: '123',
 *   postId: '456'
 * }); // '/users/123/posts/456'
 */

/**
 * All endpoints grouped for easy access
 * Import this if you need access to all endpoint categories
 */
export const API_ENDPOINTS = {
  USERS: USER_ENDPOINTS,
  POSTS: POST_ENDPOINTS,
  AUTH: AUTH_ENDPOINTS,
  UPLOAD: UPLOAD_ENDPOINTS,
  ANALYTICS: ANALYTICS_ENDPOINTS,
  SETTINGS: SETTINGS_ENDPOINTS,
} as const;