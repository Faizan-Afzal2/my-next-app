/**
 * API Client - Centralized HTTP Client Configuration
 * 
 * This file sets up a centralized HTTP client using fetch API.
 * It provides a consistent way to make API calls throughout the application.
 * 
 * Why use a centralized client?
 * - Consistent base URL and headers
 * - Centralized error handling
 * - Request/response interceptors
 * - Authentication token management
 * - Retry logic and timeout handling
 */

import { ApiResponse, ApiError } from './types';
import { env } from '@/config/env';

/**
 * API Configuration
 * Centralized configuration for all API calls
 */
const API_CONFIG = {
  // Base URL for all API calls
  // Now properly configured from environment variables
  baseURL: env.API_URL,
  
  // Default timeout for requests (from environment)
  timeout: env.API_TIMEOUT,
  
  // Default headers sent with every request
  defaultHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

/**
 * Custom Error class for API errors
 * Extends the built-in Error class with additional API-specific information
 */
export class ApiClientError extends Error {
  public status: number;
  public code?: string;
  public details?: any;

  constructor(message: string, status: number, code?: string, details?: any) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

/**
 * API Client Class
 * 
 * Provides methods for making HTTP requests with consistent
 * error handling, loading states, and response processing.
 */
class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private timeout: number;

  constructor() {
    this.baseURL = API_CONFIG.baseURL;
    this.defaultHeaders = { ...API_CONFIG.defaultHeaders };
    this.timeout = API_CONFIG.timeout;
  }

  /**
   * Set authentication token
   * Call this after user login to include token in all requests
   */
  setAuthToken(token: string | null) {
    if (token) {
      this.defaultHeaders['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.defaultHeaders['Authorization'];
    }
  }

  /**
   * Generic request method
   * Handles the common logic for all HTTP requests
   */
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    
    // Construct full URL
    const url = `${this.baseURL}${endpoint}`;
    
    // Merge headers
    const headers = {
      ...this.defaultHeaders,
      ...options.headers,
    };

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // Make the HTTP request
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });

      // Clear timeout
      clearTimeout(timeoutId);

      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiClientError(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          errorData.code,
          errorData
        );
      }

      // Parse JSON response
      const data = await response.json();
      return data;

    } catch (error) {
      clearTimeout(timeoutId);
      
      // Handle different types of errors
      if (error instanceof ApiClientError) {
        throw error;
      }
      
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new ApiClientError('Request timeout', 408);
      }
      
      if (error instanceof TypeError) {
        throw new ApiClientError('Network error - please check your connection', 0);
      }
      
      throw new ApiClientError('An unexpected error occurred', 500);
    }
  }

  /**
   * GET request
   * For fetching data from the server
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    let url = endpoint;
    
    // Add query parameters if provided
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      url += `?${searchParams.toString()}`;
    }

    return this.request<T>(url, {
      method: 'GET',
    });
  }

  /**
   * POST request
   * For creating new resources
   */
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   * For updating existing resources (full update)
   */
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   * For partial updates of existing resources
   */
  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   * For removing resources
   */
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

/**
 * Export a singleton instance of the API client
 * This ensures we use the same configuration throughout the app
 */
export const apiClient = new ApiClient();

/**
 * Helper function to handle API responses in stores
 * Standardizes the response handling pattern
 */
export const handleApiResponse = <T>(
  response: any,
  onSuccess: (data: T) => void,
  onError: (error: string) => void
) => {
  try {
    // If response has the ApiResponse wrapper format
    if (response && typeof response === 'object' && 'data' in response) {
      onSuccess(response.data);
    } else {
      // Direct data response
      onSuccess(response);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    onError(errorMessage);
  }
};

/**
 * Usage Examples:
 * 
 * // Basic GET request
 * const users = await apiClient.get<User[]>('/users');
 * 
 * // GET with parameters
 * const filteredUsers = await apiClient.get<User[]>('/users', { 
 *   page: 1, 
 *   limit: 10,
 *   search: 'john' 
 * });
 * 
 * // POST request to create user
 * const newUser = await apiClient.post<User>('/users', {
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 * 
 * // PUT request to update user
 * const updatedUser = await apiClient.put<User>(`/users/${userId}`, userData);
 * 
 * // DELETE request
 * await apiClient.delete(`/users/${userId}`);
 */