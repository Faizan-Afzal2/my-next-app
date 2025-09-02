/**
 * Custom API Hooks - Reusable API Logic
 * 
 * This file contains custom React hooks that encapsulate common API patterns.
 * These hooks make it easier to use API operations in components.
 * 
 * Benefits:
 * - Reusable API logic
 * - Consistent error handling
 * - Loading state management
 * - Cleaner component code
 */

import { useState, useCallback } from 'react';
import { apiClient, ApiClientError } from '@/api/client';

/**
 * Generic API state interface
 * Used by the useApi hook for any API operation
 */
interface ApiHookState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * useApi Hook - Generic API Operations
 * 
 * A reusable hook for any API operation.
 * Handles loading states and errors automatically.
 * 
 * @template T - The type of data returned by the API
 */
export function useApi<T = any>() {
  const [state, setState] = useState<ApiHookState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  /**
   * Execute an API call
   * 
   * @param apiCall - A function that returns a Promise (the API call)
   * @param onSuccess - Optional callback when API call succeeds
   * @param onError - Optional callback when API call fails
   */
  const execute = useCallback(async (
    apiCall: () => Promise<T>,
    onSuccess?: (data: T) => void,
    onError?: (error: string) => void
  ) => {
    // Set loading state
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Execute the API call
      const result = await apiCall();
      
      // Update state with successful result
      setState({
        data: result,
        loading: false,
        error: null,
      });
      
      // Call success callback if provided
      onSuccess?.(result);
      
      return result;
      
    } catch (error) {
      // Handle errors
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'An unexpected error occurred';
      
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
      
      // Call error callback if provided
      onError?.(errorMessage);
      
      throw error; // Re-throw for component-level handling
    }
  }, []);

  /**
   * Reset the hook state
   * Useful for clearing data when component unmounts or resets
   */
  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}

/**
 * useMutation Hook - For Create/Update/Delete Operations
 * 
 * Specialized hook for operations that modify data.
 * Provides additional features like success callbacks and optimistic updates.
 */
export function useMutation<TData = any, TVariables = any>() {
  const [state, setState] = useState({
    loading: false,
    error: null as string | null,
    success: false,
  });

  const mutate = useCallback(async (
    apiCall: (variables: TVariables) => Promise<TData>,
    variables: TVariables,
    options?: {
      onSuccess?: (data: TData) => void;
      onError?: (error: string) => void;
      onSettled?: () => void;
    }
  ) => {
    setState({ loading: true, error: null, success: false });
    
    try {
      const result = await apiCall(variables);
      
      setState({ 
        loading: false, 
        error: null, 
        success: true 
      });
      
      options?.onSuccess?.(result);
      return result;
      
    } catch (error) {
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Operation failed';
      
      setState({ 
        loading: false, 
        error: errorMessage, 
        success: false 
      });
      
      options?.onError?.(errorMessage);
      throw error;
      
    } finally {
      options?.onSettled?.();
    }
  }, []);

  const reset = useCallback(() => {
    setState({ loading: false, error: null, success: false });
  }, []);

  return {
    ...state,
    mutate,
    reset,
  };
}

/**
 * useAsyncEffect Hook - For API Calls in useEffect
 * 
 * Safely handles async operations in useEffect hooks.
 * Prevents memory leaks and race conditions.
 */
export function useAsyncEffect<T>(
  asyncOperation: () => Promise<T>,
  onSuccess: (data: T) => void,
  dependencies: React.DependencyList
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    
    const executeAsync = async () => {
      if (cancelled) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const result = await asyncOperation();
        
        if (!cancelled) {
          onSuccess(result);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          setError(errorMessage);
          setLoading(false);
        }
      }
    };

    executeAsync();

    // Cleanup function to prevent memory leaks
    return () => {
      cancelled = true;
    };
  }, dependencies);

  return { loading, error };
}

/**
 * Component Usage Examples:
 * 
 * // Example 1: Simple API call
 * function UsersList() {
 *   const { data: users, loading, error, execute } = useApi<User[]>();
 *   
 *   useEffect(() => {
 *     execute(() => apiClient.get('/users'));
 *   }, []);
 *   
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   
 *   return (
 *     <ul>
 *       {users?.map(user => <li key={user.id}>{user.name}</li>)}
 *     </ul>
 *   );
 * }
 * 
 * // Example 2: Mutation for creating data
 * function CreateUserForm() {
 *   const { loading, error, mutate } = useMutation<User, CreateUserRequest>();
 *   
 *   const handleSubmit = (formData: CreateUserRequest) => {
 *     mutate(
 *       (data) => apiClient.post('/users', data),
 *       formData,
 *       {
 *         onSuccess: (user) => console.log('User created:', user),
 *         onError: (error) => console.error('Creation failed:', error),
 *       }
 *     );
 *   };
 *   
 *   return <form onSubmit={handleSubmit}>...</form>;
 * }
 */