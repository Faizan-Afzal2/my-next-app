/**
 * API Utilities
 * 
 * Responsibilities:
 * - Provide base API configuration and utilities
 * - Handle common API request/response patterns
 * - Manage authentication headers and tokens
 * - Include error handling and retry logic
 * - Export reusable API helper functions
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error('API request failed');
    return response.json();
  },
  
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API request failed');
    return response.json();
  },
};

export const endpoints = {
  projects: '/projects',
  contact: '/contact',
  auth: '/auth',
};