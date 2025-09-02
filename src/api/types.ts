/**
 * API Types - TypeScript Definitions for API Operations
 * 
 * This file contains all the TypeScript interfaces and types
 * that define the shape of our API requests and responses.
 * 
 * Why separate types?
 * - Type safety across the entire application
 * - Consistent data structures
 * - Better developer experience with autocomplete
 * - Easier maintenance and refactoring
 */

// =============================================================================
// GENERIC API TYPES
// =============================================================================

/**
 * Generic API Response wrapper
 * Most APIs return data in a consistent format
 */
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

/**
 * Error response structure
 * Standardized error format for consistent error handling
 */
export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

/**
 * Generic API state for Zustand stores
 * This pattern can be reused for any API resource
 */
export interface ApiState<T> {
  // Data storage
  data: T[];              // Array of items (for lists)
  item: T | null;         // Single item (for details)
  
  // Loading states
  loading: boolean;       // General loading state
  creating: boolean;      // Creating new item
  updating: boolean;      // Updating existing item
  deleting: boolean;      // Deleting item
  
  // Error handling
  error: string | null;   // Error message
  
  // Pagination (for large datasets)
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// =============================================================================
// USER RELATED TYPES
// =============================================================================

/**
 * User data structure
 * Based on common user management patterns
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

/**
 * User creation request
 * Only required fields for creating a new user
 */
export interface CreateUserRequest {
  name: string;
  email: string;
  role?: User['role'];
}

/**
 * User update request
 * All fields optional for partial updates
 */
export interface UpdateUserRequest {
  name?: string;
  email?: string;
  avatar?: string;
  role?: User['role'];
  status?: User['status'];
}

// =============================================================================
// POST/BLOG RELATED TYPES
// =============================================================================

/**
 * Blog post structure
 * Example of a content management system
 */
export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Post creation request
 */
export interface CreatePostRequest {
  title: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  status?: Post['status'];
}

/**
 * Post update request
 */
export interface UpdatePostRequest {
  title?: string;
  content?: string;
  excerpt?: string;
  tags?: string[];
  status?: Post['status'];
}

// =============================================================================
// PAGINATION AND FILTERING
// =============================================================================

/**
 * Generic pagination parameters
 * Used for list requests with pagination
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Generic filter parameters
 * Common filtering options
 */
export interface FilterParams {
  search?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}

/**
 * Combined query parameters
 * For complex list requests
 */
export interface QueryParams extends PaginationParams, FilterParams {}

// =============================================================================
// AUTHENTICATION TYPES
// =============================================================================

/**
 * Login request
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Login response
 */
export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * Authentication state
 */
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Generic list response
 * Standardized format for paginated lists
 */
export interface ListResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Generic action result
 * For tracking operation success/failure
 */
export interface ActionResult {
  success: boolean;
  message?: string;
  data?: any;
}