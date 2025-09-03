import { Heading, Text } from '@/components/common/text';
import { Card, Stack } from '@/components/common/layout';

export default function AboutFolderStructure() {
  const folderStructure = `src/
├── components/
│   ├── common/              # Shared across entire app
│   │   ├── text/           # Text components
│   │   │   ├── Heading.tsx      # h1, h2, h3, h4, h5, h6 replacement
│   │   │   ├── Paragraph.tsx    # p tag replacement with variants
│   │   │   ├── Text.tsx         # span, small text replacement
│   │   │   ├── Label.tsx        # form label replacement
│   │   │   └── index.ts         # Export all text components
│   │   ├── layout/         # Layout components
│   │   │   ├── Container.tsx    # max-width containers
│   │   │   ├── Section.tsx      # page sections with spacing
│   │   │   ├── Grid.tsx         # responsive grid layouts
│   │   │   ├── Stack.tsx        # flex layouts (vertical/horizontal)
│   │   │   ├── Card.tsx         # card containers with variants
│   │   │   └── index.ts         # Export all layout components
│   │   ├── forms/          # Form components
│   │   │   ├── Input.tsx        # styled input replacement
│   │   │   ├── Textarea.tsx     # styled textarea replacement
│   │   │   ├── FormField.tsx    # complete form field with label
│   │   │   └── index.ts         # Export all form components
│   │   └── index.ts        # Export all common components
│   ├── pages/              # Page-specific components
│   │   ├── home/           # Home page components
│   │   │   ├── HomeHero.tsx
│   │   │   ├── HomeFeaturesGrid.tsx
│   │   │   ├── HomeProjectInfo.tsx
│   │   │   └── index.ts
│   │   ├── about/          # About page components
│   │   ├── contact/        # Contact page components
│   │   ├── counter/        # Counter page components
│   │   ├── api-demo/       # API demo components
│   │   └── index.ts        # Export all page components
│   ├── layout/             # App layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── ui/                 # Basic UI elements
│   │   ├── Button.tsx
│   │   └── index.ts
│   └── api/               # API-related components
│       ├── LoadingSpinner.tsx
│       ├── ErrorMessage.tsx
│       └── index.ts
├── store/                  # Zustand state management
│   ├── users-store.ts      # API operations with loading states
│   ├── counter-store.ts    # Basic counter example
│   └── index.ts
├── api/                    # API layer
│   ├── client.ts           # HTTP client configuration
│   ├── endpoints.ts        # API endpoint definitions
│   └── types.ts           # API TypeScript interfaces
├── hooks/                  # Custom React hooks
│   ├── use-api.ts         # Reusable API hooks
│   └── index.ts
├── config/                 # Configuration files
│   ├── env.ts             # Environment variables
│   └── api.ts
├── lib/                    # Utility functions
│   ├── utils.ts
│   └── validations.ts
└── app/                    # Next.js App Router
    ├── page.tsx           # Home page (clean, component-only)
    ├── about/page.tsx     # About page (clean, component-only)
    ├── contact/page.tsx   # Contact page (clean, component-only)
    └── ...                # Other clean pages`;

  return (
    <Stack direction="vertical" spacing="lg">
      <Heading level={2} variant="primary">
        📁 Project Folder Structure
      </Heading>
      
      <Card variant="outlined" padding="lg">
        <Text 
          as="pre" 
          variant="muted" 
          size="sm" 
          className="font-mono overflow-x-auto whitespace-pre text-wrap"
        >
          {folderStructure}
        </Text>
      </Card>
    </Stack>
  );
}