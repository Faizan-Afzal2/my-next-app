import { useUsersStore } from '@/store/users-store';
import { Heading, Text } from '@/components/common/text';
import { Grid, Card, Stack } from '@/components/common/layout';

export default function ApiStatusPanel() {
  const loading = useUsersStore((state) => state.loading);
  const creating = useUsersStore((state) => state.creating);
  const updating = useUsersStore((state) => state.updating);
  const deleting = useUsersStore((state) => state.deleting);

  const learningPoints = [
    'API integration with Zustand stores',
    'Loading and error state management',
    'Optimistic updates for better UX',
    'Form handling with API operations',
    'CRUD operations (Create, Read, Update, Delete)',
    'TypeScript for API type safety',
    'Centralized API client configuration'
  ];

  const codeExample = `// 1. Subscribe to store state
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
};`;

  return (
    <Stack direction="vertical" spacing="lg" className="mt-12">
      <Grid cols={2} gap="lg">
        {/* API Operations Status */}
        <Card variant="default" padding="lg" className="bg-secondary">
          <Heading level={3} variant="primary" className="mb-4">
            🔄 API Operations Status
          </Heading>
          <Stack direction="vertical" spacing="sm">
            <Stack direction="horizontal" justify="between">
              <Text variant="muted" size="sm">Fetching Users:</Text>
              <Text variant={loading ? "primary" : "muted"} size="sm">
                {loading ? "🔄 Loading..." : "✅ Ready"}
              </Text>
            </Stack>
            <Stack direction="horizontal" justify="between">
              <Text variant="muted" size="sm">Creating User:</Text>
              <Text variant={creating ? "primary" : "muted"} size="sm">
                {creating ? "🔄 Creating..." : "✅ Ready"}
              </Text>
            </Stack>
            <Stack direction="horizontal" justify="between">
              <Text variant="muted" size="sm">Updating User:</Text>
              <Text variant={updating ? "primary" : "muted"} size="sm">
                {updating ? "🔄 Updating..." : "✅ Ready"}
              </Text>
            </Stack>
            <Stack direction="horizontal" justify="between">
              <Text variant="muted" size="sm">Deleting User:</Text>
              <Text variant={deleting ? "destructive" : "muted"} size="sm">
                {deleting ? "🗑️ Deleting..." : "✅ Ready"}
              </Text>
            </Stack>
          </Stack>
        </Card>

        {/* Learning Points */}
        <Card variant="default" padding="lg" className="bg-secondary">
          <Heading level={3} variant="primary" className="mb-4">
            📚 What You're Learning
          </Heading>
          <Stack direction="vertical" spacing="sm">
            {learningPoints.map((point, index) => (
              <Text key={index} variant="muted" size="sm">
                • {point}
              </Text>
            ))}
          </Stack>
        </Card>
      </Grid>

      {/* Code Example */}
      <Card variant="default" padding="lg">
        <Heading level={3} variant="primary" className="mb-4">
          💻 Code Pattern
        </Heading>
        <Card variant="ghost" padding="md" className="bg-muted">
          <Text 
            as="div" 
            variant="muted" 
            size="sm" 
            className="font-mono overflow-x-auto whitespace-pre"
          >
            {codeExample}
          </Text>
        </Card>
      </Card>
    </Stack>
  );
}