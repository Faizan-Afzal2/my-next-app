import { useUsersStore } from '@/store/users-store';
import { Heading } from '@/components/common/text';
import { Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

interface UsersTableHeaderProps {
  onCreateClick: () => void;
}

export default function UsersTableHeader({ onCreateClick }: UsersTableHeaderProps) {
  const loading = useUsersStore((state) => state.loading);
  const { fetchUsers } = useUsersStore();

  return (
    <Stack direction="horizontal" justify="between" align="center" className="mb-8">
      <Heading level={2} variant="primary">
        Users Management
      </Heading>
      <Stack direction="horizontal" spacing="md">
        <Button 
          onClick={() => fetchUsers()} 
          variant="secondary"
          disabled={loading}
        >
          🔄 Refresh
        </Button>
        <Button 
          onClick={onCreateClick}
          variant="primary"
        >
          ➕ Add User
        </Button>
      </Stack>
    </Stack>
  );
}