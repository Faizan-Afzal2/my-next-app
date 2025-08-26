/**
 * Application Store
 * 
 * Manages global application state using Zustand.
 * 
 * Responsibilities:
 * - Handle UI state (sidebar, modals, loading states)
 * - Store theme preferences
 * - Manage global configuration
 * - Handle application-wide notifications
 */

import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
  loading: boolean;
  notifications: string[];
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  addNotification: (message: string) => void;
  removeNotification: (index: number) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'system',
  sidebarOpen: false,
  loading: false,
  notifications: [],
  setTheme: (theme) => set({ theme }),
  toggleSidebar: () => set({ sidebarOpen: !get().sidebarOpen }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setLoading: (loading) => set({ loading }),
  addNotification: (message) =>
    set({ notifications: [...get().notifications, message] }),
  removeNotification: (index) =>
    set({
      notifications: get().notifications.filter((_, i) => i !== index),
    }),
}));