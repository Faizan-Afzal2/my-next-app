/**
 * API Configuration
 * 
 * Centralized configuration for API endpoints and settings.
 * 
 * Responsibilities:
 * - Define API base URLs and endpoints
 * - Configure request/response interceptors
 * - Set up authentication headers
 * - Handle environment-specific API configurations
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    profile: '/auth/profile',
  },
  // Contact
  contact: {
    submit: '/contact/submit',
  },
  // Projects
  projects: {
    list: '/projects',
    create: '/projects',
    update: (id: string) => `/projects/${id}`,
    delete: (id: string) => `/projects/${id}`,
  },
};

export const getAuthHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
});