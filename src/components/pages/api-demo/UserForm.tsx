'use client';

import { useState } from 'react';
import { CreateUserRequest, User } from '@/api/types';
import { useUsersStore } from '@/store/users-store';
import { Heading } from '@/components/common/text';
import { Card, Stack } from '@/components/common/layout';
import { FormField, Input } from '@/components/common/forms';
import Button from '@/components/ui/Button';

interface UserFormProps {
  mode: 'create' | 'edit';
  user?: User | null;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function UserForm({ mode, user, onClose, onSuccess }: UserFormProps) {
  const creating = useUsersStore((state) => state.creating);
  const updating = useUsersStore((state) => state.updating);
  const { createUser, updateUser } = useUsersStore();

  const [formData, setFormData] = useState<CreateUserRequest>({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'user'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let success = false;
      
      if (mode === 'create') {
        success = await createUser(formData);
      } else if (mode === 'edit' && user) {
        success = await updateUser(user.id, formData);
      }
      
      if (success) {
        onSuccess?.();
        onClose();
      }
    } catch (error) {
      console.error(`Failed to ${mode} user:`, error);
    }
  };

  const isLoading = creating || updating;
  const title = mode === 'create' ? 'Create New User' : `Edit User: ${user?.name}`;
  const submitText = mode === 'create' 
    ? (creating ? 'Creating...' : 'Create User')
    : (updating ? 'Updating...' : 'Update User');

  return (
    <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
      <Card variant="elevated" padding="lg" className="w-full max-w-md">
        <Heading level={3} variant="primary" className="mb-4">
          {title}
        </Heading>
        
        <form onSubmit={handleSubmit}>
          <Stack direction="vertical" spacing="md">
            <FormField label="Name" htmlFor="name" required>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormField>
            
            <FormField label="Email" htmlFor="email" required>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormField>
            
            <FormField label="Role" htmlFor="role" required>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
              </select>
            </FormField>
            
            <Stack direction="horizontal" spacing="sm" className="pt-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="flex-1"
              >
                {submitText}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="secondary"
                disabled={isLoading}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Card>
    </div>
  );
}