'use client';

import { useEffect, useState } from 'react';
import { useUsersStore } from '@/store/users-store';
import { User } from '@/api/types';
import { Container, Stack } from '@/components/common/layout';
import { LoadingSpinner, ErrorMessage } from '@/components/common';
import { 
  ApiDemoHeader,
  UsersTableHeader, 
  UsersTable,
  UserForm,
  ApiStatusPanel 
} from '@/components/pages/api-demo';

export default function ApiDemoPage() {
  const users = useUsersStore((state) => state.users);
  const loading = useUsersStore((state) => state.loading);
  const error = useUsersStore((state) => state.error);
  const { fetchUsers, deleteUser, setSelectedUser } = useUsersStore();
  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUserLocal] = useState<User | null>(null);
  
  useEffect(() => {
    fetchUsers({ page: 1, limit: 10 });
  }, [fetchUsers]);
  
  const handleEditClick = (user: User) => {
    setSelectedUserLocal(user);
    setSelectedUser(user);
    setShowEditForm(true);
  };
  
  const handleDeleteUser = async (user: User) => {
    if (!confirm(`Are you sure you want to delete ${user.name}?`)) return;
    
    const success = await deleteUser(user.id);
    if (success) {
      alert('User deleted successfully!');
    }
  };

  const handleFormClose = () => {
    setShowCreateForm(false);
    setShowEditForm(false);
    setSelectedUserLocal(null);
    setSelectedUser(null);
  };

  const handleFormSuccess = () => {
    alert(`User ${showCreateForm ? 'created' : 'updated'} successfully!`);
  };

  return (
    <Container size="xl" padding="md">
      <Stack direction="vertical" spacing="lg">
        <ApiDemoHeader />
        
        <UsersTableHeader onCreateClick={() => setShowCreateForm(true)} />
        
        {error && (
          <ErrorMessage message={error} onRetry={() => fetchUsers()} />
        )}
        
        {loading && (
          <LoadingSpinner message="Fetching users..." />
        )}
        
        {!loading && (
          <UsersTable 
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteUser}
          />
        )}
        
        <ApiStatusPanel />
      </Stack>

      {showCreateForm && (
        <UserForm 
          mode="create"
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}

      {showEditForm && selectedUser && (
        <UserForm 
          mode="edit"
          user={selectedUser}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </Container>
  );
}