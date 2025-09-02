/**
 * API Demo Page - Complete Zustand + API Integration Example
 * 
 * This page demonstrates how to use Zustand stores with API calls.
 * It shows a complete CRUD (Create, Read, Update, Delete) implementation
 * with proper loading states, error handling, and user feedback.
 * 
 * Educational Focus:
 * - Real API integration with JSONPlaceholder
 * - Loading and error state management
 * - Optimistic updates
 * - Form handling with API calls
 * - List management with CRUD operations
 */

'use client';

import { useEffect, useState } from 'react';
import { useUsersStore } from '@/store/users-store';
import { CreateUserRequest, UpdateUserRequest, User } from '@/api/types';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/api/LoadingSpinner';
import ErrorMessage from '@/components/api/ErrorMessage';

export default function ApiDemoPage() {
  
  // =================== ZUSTAND STORE SUBSCRIPTIONS ===================
  
  /**
   * Subscribe to users store state
   * 
   * We use selective subscriptions to only re-render when specific
   * pieces of state change. This is a performance best practice.
   */
  const users = useUsersStore((state) => state.users);
  const loading = useUsersStore((state) => state.loading);
  const error = useUsersStore((state) => state.error);
  const creating = useUsersStore((state) => state.creating);
  const updating = useUsersStore((state) => state.updating);
  const deleting = useUsersStore((state) => state.deleting);
  const selectedUser = useUsersStore((state) => state.selectedUser);
  
  /**
   * Subscribe to store actions
   * Actions don't change, so these won't cause re-renders
   */
  const { 
    fetchUsers, 
    createUser, 
    updateUser, 
    deleteUser, 
    setSelectedUser,
    clearErrors 
  } = useUsersStore();
  
  // =================== LOCAL COMPONENT STATE ===================
  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState<CreateUserRequest>({
    name: '',
    email: '',
    role: 'user'
  });
  
  // =================== EFFECTS ===================
  
  /**
   * Fetch users when component mounts
   * 
   * This demonstrates how to trigger API calls when a component loads.
   * We use useEffect with an empty dependency array to run once on mount.
   */
  useEffect(() => {
    fetchUsers({ page: 1, limit: 10 });
  }, [fetchUsers]);
  
  // =================== EVENT HANDLERS ===================
  
  /**
   * Handle form input changes
   * Updates local form state as user types
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  /**
   * Handle user creation
   * 
   * Demonstrates how to call store actions and handle the response.
   * Shows success/error feedback and form reset.
   */
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const success = await createUser(formData);
      
      if (success) {
        // Reset form and close modal on success
        setFormData({ name: '', email: '', role: 'user' });
        setShowCreateForm(false);
        alert('User created successfully!'); // In real app, use toast notifications
      }
    } catch (error) {
      // Error is already handled by the store
      // Component can add additional error handling here if needed
      console.error('Failed to create user:', error);
    }
  };
  
  /**
   * Handle user update
   * 
   * Shows how to update existing data through the store.
   */
  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUser) return;
    
    try {
      const success = await updateUser(selectedUser.id, formData);
      
      if (success) {
        setShowEditForm(false);
        setSelectedUser(null);
        alert('User updated successfully!');
      }
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };
  
  /**
   * Handle user deletion
   * 
   * Shows how to delete data with confirmation.
   */
  const handleDeleteUser = async (user: User) => {
    if (!confirm(`Are you sure you want to delete ${user.name}?`)) return;
    
    try {
      const success = await deleteUser(user.id);
      
      if (success) {
        alert('User deleted successfully!');
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };
  
  /**
   * Handle edit button click
   * Prepopulates form with existing user data
   */
  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role
    });
    setShowEditForm(true);
  };
  
  // =================== RENDER ===================
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          API Management with Zustand
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete CRUD operations using Zustand for state management and JSONPlaceholder API for demo data.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Users Management</h2>
        <div className="space-x-4">
          <Button 
            onClick={() => fetchUsers()} 
            variant="secondary"
            disabled={loading}
          >
            🔄 Refresh
          </Button>
          <Button 
            onClick={() => setShowCreateForm(true)}
            variant="primary"
          >
            ➕ Add User
          </Button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-6">
          <ErrorMessage 
            message={error} 
            onRetry={() => fetchUsers()}
          />
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mb-6">
          <LoadingSpinner message="Fetching users..." />
        </div>
      )}

      {/* Users List */}
      {!loading && users.length > 0 && (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-card-foreground">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-muted-foreground">
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <Button
                        onClick={() => handleEditClick(user)}
                        variant="secondary"
                        size="sm"
                        disabled={updating}
                      >
                        {updating ? '⏳' : '✏️'} Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteUser(user)}
                        variant="danger"
                        size="sm"
                        disabled={deleting}
                      >
                        {deleting ? '⏳' : '🗑️'} Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && users.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No users found</p>
          <Button onClick={() => setShowCreateForm(true)} variant="primary">
            Create First User
          </Button>
        </div>
      )}

      {/* Create User Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Create New User</h3>
            
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={creating}
                  className="flex-1"
                >
                  {creating ? 'Creating...' : 'Create User'}
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  variant="secondary"
                  disabled={creating}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Form Modal */}
      {showEditForm && selectedUser && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Edit User: {selectedUser.name}
            </h3>
            
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={updating}
                  className="flex-1"
                >
                  {updating ? 'Updating...' : 'Update User'}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setShowEditForm(false);
                    setSelectedUser(null);
                  }}
                  variant="secondary"
                  disabled={updating}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Educational Information */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        
        {/* API Operations Status */}
        <div className="bg-secondary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            🔄 API Operations Status
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fetching Users:</span>
              <span className={loading ? "text-primary" : "text-muted-foreground"}>
                {loading ? "🔄 Loading..." : "✅ Ready"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Creating User:</span>
              <span className={creating ? "text-primary" : "text-muted-foreground"}>
                {creating ? "🔄 Creating..." : "✅ Ready"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Updating User:</span>
              <span className={updating ? "text-primary" : "text-muted-foreground"}>
                {updating ? "🔄 Updating..." : "✅ Ready"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Deleting User:</span>
              <span className={deleting ? "text-destructive" : "text-muted-foreground"}>
                {deleting ? "🗑️ Deleting..." : "✅ Ready"}
              </span>
            </div>
          </div>
        </div>

        {/* Learning Points */}
        <div className="bg-secondary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            📚 What You're Learning
          </h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• API integration with Zustand stores</li>
            <li>• Loading and error state management</li>
            <li>• Optimistic updates for better UX</li>
            <li>• Form handling with API operations</li>
            <li>• CRUD operations (Create, Read, Update, Delete)</li>
            <li>• TypeScript for API type safety</li>
            <li>• Centralized API client configuration</li>
          </ul>
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-8 bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-4">
          💻 Code Pattern
        </h3>
        <div className="bg-muted rounded-lg p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
          <pre>{`// 1. Subscribe to store state
const users = useUsersStore((state) => state.users);
const loading = useUsersStore((state) => state.loading);

// 2. Get store actions
const { fetchUsers, createUser } = useUsersStore();

// 3. Use in useEffect
useEffect(() => {
  fetchUsers({ page: 1, limit: 10 });
}, []);

// 4. Handle form submission
const handleCreate = async (formData) => {
  const success = await createUser(formData);
  if (success) {
    // Handle success
  }
};`}</pre>
        </div>
      </div>
    </div>
  );
}

/**
 * Key Learning Points for Students:
 * 
 * 1. STORE INTEGRATION: How to use Zustand stores with API calls
 * 2. LOADING STATES: Managing different loading states for better UX
 * 3. ERROR HANDLING: Graceful error handling and user feedback
 * 4. OPTIMISTIC UPDATES: Updating UI before API response for speed
 * 5. FORM HANDLING: Managing form state with API operations
 * 6. CRUD PATTERNS: Complete Create, Read, Update, Delete workflow
 * 7. TYPE SAFETY: Using TypeScript for API type definitions
 * 8. SEPARATION OF CONCERNS: API client, store, and UI components
 */