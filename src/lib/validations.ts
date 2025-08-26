/**
 * Validation Schemas
 * 
 * Responsibilities:
 * - Define Zod schemas for form validation
 * - Provide type-safe validation functions
 * - Handle client and server-side validation
 * - Export reusable validation utilities
 * - Include common validation patterns
 */

import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Category is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ProjectFormData = z.infer<typeof projectSchema>;