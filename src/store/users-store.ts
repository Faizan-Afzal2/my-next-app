/**
 * Users Store - API Management with Zustand
 * 
 * This store demonstrates how to manage API calls using Zustand.
 * It handles CRUD operations for users with proper loading and error states.
 * 
 * Key Learning Concepts:
 * - Async actions in Zustand
 * - Loading state management
 * - Error handling patterns
 * - Optimistic updates
 * - API integration patterns
 */

import { create } from 'zustand';
import { apiClient, ApiClientError } from '@/api/client';
import { USER_ENDPOINTS } from '@/api/endpoints';
import { User, CreateUserRequest, UpdateUserRequest, QueryParams } from '@/api/types';

/**
 * Users Store State Interface
 * 
 * This interface defines all the state and actions
 * needed for managing users through API calls.
 */
interface UsersState {
  // =================== DATA STATE ===================
  users: User[];                    // Array of all users
  selectedUser: User | null;        // Currently selected user for details/editing
  
  // =================== LOADING STATES ===================
  // Having separate loading states allows for better UX
  // Users can see exactly what operation is in progress
  loading: boolean;                 // General loading (for lists)
  creating: boolean;                // Creating new user
  updating: boolean;                // Updating existing user
  deleting: boolean;                // Deleting user
  fetchingDetails: boolean;         // Fetching single user details
  
  // =================== ERROR HANDLING ===================
  error: string | null;             // General error message
  createError: string | null;       // Error during creation
  updateError: string | null;       // Error during update
  deleteError: string | null;       // Error during deletion
  
  // =================== PAGINATION ===================
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  
  // =================== ACTIONS ===================
  // These are the functions components will call to interact with the API
  
  // Fetch operations
  fetchUsers: (params?: QueryParams) => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  searchUsers: (query: string) => Promise<void>;
  
  // CRUD operations
  createUser: (userData: CreateUserRequest) => Promise<boolean>;
  updateUser: (id: string, userData: UpdateUserRequest) => Promise<boolean>;
  deleteUser: (id: string) => Promise<boolean>;
  
  // UI state management
  setSelectedUser: (user: User | null) => void;
  clearErrors: () => void;
  clearUsers: () => void;
}

/**
 * Create the Users Store
 * 
 * This store manages all user-related API operations and state.
 * It demonstrates best practices for API integration with Zustand.
 */
export const useUsersStore = create<UsersState>((set, get) => ({
  
  // =================== INITIAL STATE ===================
  users: [],
  selectedUser: null,
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  fetchingDetails: false,
  error: null,
  createError: null,
  updateError: null,
  deleteError: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  },
  
  // =================== FETCH OPERATIONS ===================
  
  /**
   * Fetch Users List
   * 
   * Fetches a list of users from the API with optional filtering and pagination.
   * This is the most common operation - getting a list of resources.
   */
  fetchUsers: async (params?: QueryParams) => {
    // Set loading state to true
    set({ loading: true, error: null });
    
    try {
      // Make API call with parameters
      const response = await apiClient.get<User[]>(USER_ENDPOINTS.LIST, params);
      
      // Update state with fetched data
      set({ 
        users: response,
        loading: false,
        error: null,
        // Update pagination if response includes it
        pagination: {
          page: params?.page || 1,
          limit: params?.limit || 10,
          total: response.length, // In real API, this would come from response
          totalPages: Math.ceil(response.length / (params?.limit || 10)),
        }
      });
      
    } catch (error) {
      // Handle errors gracefully
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to fetch users';
        
      set({ 
        loading: false, 
        error: errorMessage,
        users: [] // Clear users on error
      });
    }
  },
  
  /**
   * Fetch Single User by ID
   * 
   * Fetches detailed information about a specific user.
   * Useful for user profiles or edit forms.
   */
  fetchUserById: async (id: string) => {
    set({ fetchingDetails: true, error: null });
    
    try {
      const user = await apiClient.get<User>(USER_ENDPOINTS.DETAIL(id));
      
      set({ 
        selectedUser: user,
        fetchingDetails: false,
        error: null 
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to fetch user details';
        
      set({ 
        fetchingDetails: false, 
        error: errorMessage,
        selectedUser: null 
      });
    }
  },
  
  /**
   * Search Users
   * 
   * Searches for users based on a query string.
   * Demonstrates how to handle search functionality.
   */
  searchUsers: async (query: string) => {
    set({ loading: true, error: null });
    
    try {
      const response = await apiClient.get<User[]>(USER_ENDPOINTS.SEARCH, { q: query });
      
      set({ 
        users: response,
        loading: false,
        error: null 
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Search failed';
        
      set({ 
        loading: false, 
        error: errorMessage 
      });
    }
  },
  
  // =================== CRUD OPERATIONS ===================
  
  /**
   * Create New User
   * 
   * Creates a new user and adds it to the local state.
   * Returns boolean to indicate success/failure.
   */
  createUser: async (userData: CreateUserRequest): Promise<boolean> => {
    set({ creating: true, createError: null });
    
    try {
      // Make API call to create user
      const newUser = await apiClient.post<User>(USER_ENDPOINTS.CREATE, userData);
      
      // OPTIMISTIC UPDATE: Add user to local state immediately
      const currentUsers = get().users;
      set({ 
        users: [newUser, ...currentUsers], // Add to beginning of array
        creating: false,
        createError: null 
      });
      
      return true; // Success
      
    } catch (error) {
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to create user';
        
      set({ 
        creating: false, 
        createError: errorMessage 
      });
      
      return false; // Failure
    }
  },
  
  /**
   * Update Existing User
   * 
   * Updates a user's information both on the server and in local state.
   * Demonstrates optimistic updates for better UX.
   */
  updateUser: async (id: string, userData: UpdateUserRequest): Promise<boolean> => {
    set({ updating: true, updateError: null });
    
    // Store original user data for rollback if API call fails
    const currentUsers = get().users;
    const originalUser = currentUsers.find(user => user.id === id);
    
    try {
      // OPTIMISTIC UPDATE: Update local state first
      const optimisticUsers = currentUsers.map(user => 
        user.id === id 
          ? { ...user, ...userData, updatedAt: new Date().toISOString() }
          : user
      );
      set({ users: optimisticUsers });
      
      // Make API call
      const updatedUser = await apiClient.put<User>(USER_ENDPOINTS.UPDATE(id), userData);
      
      // Update with real response from server
      const finalUsers = currentUsers.map(user => 
        user.id === id ? updatedUser : user
      );
      
      set({ 
        users: finalUsers,
        selectedUser: get().selectedUser?.id === id ? updatedUser : get().selectedUser,
        updating: false,
        updateError: null 
      });
      
      return true;
      
    } catch (error) {
      // ROLLBACK: Restore original state on error
      if (originalUser) {
        const rolledBackUsers = currentUsers.map(user => 
          user.id === id ? originalUser : user
        );
        set({ users: rolledBackUsers });
      }
      
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to update user';
        
      set({ 
        updating: false, 
        updateError: errorMessage 
      });
      
      return false;
    }
  },
  
  /**
   * Delete User
   * 
   * Removes a user from both the server and local state.
   * Includes optimistic updates with rollback on failure.
   */
  deleteUser: async (id: string): Promise<boolean> => {
    set({ deleting: true, deleteError: null });
    
    // Store original state for potential rollback
    const currentUsers = get().users;
    const userToDelete = currentUsers.find(user => user.id === id);
    
    try {
      // OPTIMISTIC UPDATE: Remove from local state first
      const optimisticUsers = currentUsers.filter(user => user.id !== id);
      set({ users: optimisticUsers });
      
      // Make API call
      await apiClient.delete(USER_ENDPOINTS.DELETE(id));
      
      // Clear selected user if it was the deleted one
      if (get().selectedUser?.id === id) {
        set({ selectedUser: null });
      }
      
      set({ 
        deleting: false,
        deleteError: null 
      });
      
      return true;
      
    } catch (error) {
      // ROLLBACK: Restore user to list on error
      if (userToDelete) {
        set({ users: currentUsers });
      }
      
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to delete user';
        
      set({ 
        deleting: false, 
        deleteError: errorMessage 
      });
      
      return false;
    }
  },
  
  // =================== UI STATE MANAGEMENT ===================
  
  /**
   * Set Selected User
   * 
   * Updates the currently selected user for detail views or editing.
   * This is pure state management, no API calls involved.
   */
  setSelectedUser: (user: User | null) => set({ selectedUser: user }),
  
  /**
   * Clear All Errors
   * 
   * Resets all error states. Useful for forms or when dismissing error messages.
   */
  clearErrors: () => set({ 
    error: null, 
    createError: null, 
    updateError: null, 
    deleteError: null 
  }),
  
  /**
   * Clear Users List
   * 
   * Clears the users array. Useful for logout or switching contexts.
   */
  clearUsers: () => set({ 
    users: [], 
    selectedUser: null,
    pagination: { page: 1, limit: 10, total: 0, totalPages: 0 }
  }),
}));

/**
 * Usage Examples in Components:
 * 
 * // Fetch users when component mounts
 * useEffect(() => {
 *   fetchUsers({ page: 1, limit: 10 });
 * }, []);
 * 
 * // Subscribe to specific state
 * const users = useUsersStore((state) => state.users);
 * const loading = useUsersStore((state) => state.loading);
 * const error = useUsersStore((state) => state.error);
 * 
 * // Get actions
 * const { createUser, updateUser, deleteUser } = useUsersStore();
 * 
 * // Handle form submission
 * const handleCreateUser = async (formData) => {
 *   const success = await createUser(formData);
 *   if (success) {
 *     // Handle success (close modal, show notification, etc.)
 *   }
 * };
 */