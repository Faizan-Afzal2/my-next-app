/**
 * Store Directory - State Management
 * 
 * This directory contains all global state management stores using Zustand.
 * Each store handles specific domain logic for the application.
 * 
 * Responsibilities:
 * - Export all store hooks for easy importing
 * - Provide centralized access to application state
 * - Maintain clean separation between different state domains
 * - Handle global UI state, user preferences, and app settings
 */

export { useAppStore } from './app-store';
export { useCounterStore } from './counter-store';