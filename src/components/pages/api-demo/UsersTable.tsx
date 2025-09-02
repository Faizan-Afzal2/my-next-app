import { useUsersStore } from '@/store/users-store';
import { User } from '@/api/types';
import { Text } from '@/components/common/text';
import { Card, Stack } from '@/components/common/layout';
import Button from '@/components/ui/Button';

interface UsersTableProps {
  onEditClick: (user: User) => void;
  onDeleteClick: (user: User) => void;
}

export default function UsersTable({ onEditClick, onDeleteClick }: UsersTableProps) {
  const users = useUsersStore((state) => state.users);
  const updating = useUsersStore((state) => state.updating);
  const deleting = useUsersStore((state) => state.deleting);

  if (users.length === 0) {
    return (
      <Stack direction="vertical" align="center" spacing="md" className="py-12">
        <Text variant="muted">No users found</Text>
        <Button onClick={() => {}} variant="primary">
          Create First User
        </Button>
      </Stack>
    );
  }

  return (
    <Card variant="default" padding="none" className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-3 text-left">
                <Text variant="muted" size="xs" weight="medium" className="uppercase tracking-wider">
                  Name
                </Text>
              </th>
              <th className="px-6 py-3 text-left">
                <Text variant="muted" size="xs" weight="medium" className="uppercase tracking-wider">
                  Email
                </Text>
              </th>
              <th className="px-6 py-3 text-left">
                <Text variant="muted" size="xs" weight="medium" className="uppercase tracking-wider">
                  Actions
                </Text>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Text variant="default" size="sm" weight="medium">
                    {user.name}
                  </Text>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Text variant="muted" size="sm">
                    {user.email}
                  </Text>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Stack direction="horizontal" spacing="sm">
                    <Button
                      onClick={() => onEditClick(user)}
                      variant="secondary"
                      size="sm"
                      disabled={updating}
                    >
                      {updating ? '⏳' : '✏️'} Edit
                    </Button>
                    <Button
                      onClick={() => onDeleteClick(user)}
                      variant="danger"
                      size="sm"
                      disabled={deleting}
                    >
                      {deleting ? '⏳' : '🗑️'} Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}