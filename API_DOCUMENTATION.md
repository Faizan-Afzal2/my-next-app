# API Management System Documentation

## 📚 Overview

This project implements a comprehensive API management system using **Zustand** for state management and a centralized HTTP client for API operations. The system is designed to be educational, scalable, and production-ready.

## 🏗️ Architecture Overview

```
src/
├── api/                    # API Layer
│   ├── client.ts          # HTTP client with error handling
│   ├── endpoints.ts       # Centralized endpoint definitions  
│   └── types.ts           # TypeScript API interfaces
├── store/                 # State Management Layer
│   ├── users-store.ts     # Users CRUD operations
│   ├── counter-store.ts   # Basic counter example
│   └── index.ts           # Store exports
├── hooks/                 # Custom API Hooks
│   └── use-api.ts         # Reusable API hooks
├── components/api/        # API-related UI Components
│   ├── LoadingSpinner.tsx # Loading states
│   └── ErrorMessage.tsx   # Error display
└── app/
    ├── api-demo/          # API demonstration page
    └── counter/           # Basic Zustand example
```

## 🔧 Core Components

### 1. API Client (`api/client.ts`)

**Purpose**: Centralized HTTP client for all API operations

**Features**:
- Consistent base URL and headers
- Authentication token management
- Request/response interceptors
- Error handling with custom error types
- Timeout and retry logic
- TypeScript integration

**Key Methods**:
```typescript
apiClient.get<T>(endpoint, params?)     // GET requests
apiClient.post<T>(endpoint, data?)      // POST requests  
apiClient.put<T>(endpoint, data?)       // PUT requests
apiClient.patch<T>(endpoint, data?)     // PATCH requests
apiClient.delete<T>(endpoint)           // DELETE requests
```

### 2. Type Definitions (`api/types.ts`)

**Purpose**: TypeScript interfaces for type-safe API operations

**Key Interfaces**:
- `ApiResponse<T>` - Generic API response wrapper
- `ApiError` - Standardized error format
- `ApiState<T>` - Generic store state pattern
- `User`, `Post` - Domain-specific types
- `PaginationParams`, `FilterParams` - Query parameters

### 3. Endpoints (`api/endpoints.ts`)

**Purpose**: Centralized endpoint definitions to prevent URL typos

**Organization**:
```typescript
USER_ENDPOINTS = {
  LIST: '/users',
  CREATE: '/users', 
  DETAIL: (id) => `/users/${id}`,
  UPDATE: (id) => `/users/${id}`,
  DELETE: (id) => `/users/${id}`
}
```

### 4. Zustand Stores (`store/`)

**Purpose**: State management with API integration

**Key Features**:
- Separate loading states for different operations
- Comprehensive error handling
- Optimistic updates with rollback
- TypeScript integration
- Clear separation of concerns

**Store Pattern**:
```typescript
interface StoreState {
  // Data
  items: T[]
  selectedItem: T | null
  
  // Loading states
  loading: boolean
  creating: boolean
  updating: boolean
  deleting: boolean
  
  // Errors
  error: string | null
  
  // Actions
  fetchItems: () => Promise<void>
  createItem: (data) => Promise<boolean>
  updateItem: (id, data) => Promise<boolean>
  deleteItem: (id) => Promise<boolean>
}
```

## 📖 Educational Learning Path

### Phase 1: Basic Concepts
1. **What is Zustand?** - State management library overview
2. **Basic Store** - Counter example (`/counter`)
3. **Store Structure** - State vs Actions vs Types

### Phase 2: API Integration  
1. **HTTP Client** - Centralized API client setup
2. **Type Safety** - TypeScript interfaces for APIs
3. **Error Handling** - Graceful error management

### Phase 3: Advanced Patterns
1. **CRUD Operations** - Complete data management (`/api-demo`)
2. **Loading States** - Multiple loading indicators
3. **Optimistic Updates** - Update UI before API response
4. **Form Integration** - API calls with form handling

### Phase 4: Best Practices
1. **Performance** - Selective subscriptions
2. **Error Recovery** - Rollback mechanisms
3. **Code Organization** - Separation of concerns
4. **Testing** - Unit tests for stores and API calls

## 🚀 Step-by-Step Guide: Adding a New API

### Step 1: Define Types (`api/types.ts`)

```typescript
// 1. Create the main entity interface
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

// 2. Create request interfaces
export interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
  category: string;
  inStock?: boolean;
}

export interface UpdateProductRequest {
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  inStock?: boolean;
}
```

### Step 2: Add Endpoints (`api/endpoints.ts`)

```typescript
// Add to existing endpoints file
export const PRODUCT_ENDPOINTS = {
  LIST: '/products',
  CREATE: '/products',
  DETAIL: (id: string) => `/products/${id}`,
  UPDATE: (id: string) => `/products/${id}`,
  DELETE: (id: string) => `/products/${id}`,
  
  // Product-specific endpoints
  SEARCH: '/products/search',
  BY_CATEGORY: (category: string) => `/products/category/${category}`,
  FEATURED: '/products/featured',
} as const;

// Update the main endpoints export
export const API_ENDPOINTS = {
  USERS: USER_ENDPOINTS,
  POSTS: POST_ENDPOINTS,
  PRODUCTS: PRODUCT_ENDPOINTS, // Add this line
  AUTH: AUTH_ENDPOINTS,
  // ... other endpoints
} as const;
```

### Step 3: Create Zustand Store (`store/products-store.ts`)

```typescript
import { create } from 'zustand';
import { apiClient, ApiClientError } from '@/api/client';
import { PRODUCT_ENDPOINTS } from '@/api/endpoints';
import { Product, CreateProductRequest, UpdateProductRequest } from '@/api/types';

interface ProductsState {
  // Data state
  products: Product[];
  selectedProduct: Product | null;
  
  // Loading states
  loading: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  
  // Error states
  error: string | null;
  createError: string | null;
  updateError: string | null;
  deleteError: string | null;
  
  // Actions
  fetchProducts: () => Promise<void>;
  createProduct: (data: CreateProductRequest) => Promise<boolean>;
  updateProduct: (id: string, data: UpdateProductRequest) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;
  setSelectedProduct: (product: Product | null) => void;
  clearErrors: () => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  // Initial state
  products: [],
  selectedProduct: null,
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  error: null,
  createError: null,
  updateError: null,
  deleteError: null,
  
  // Actions implementation
  fetchProducts: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await apiClient.get<Product[]>(PRODUCT_ENDPOINTS.LIST);
      set({ products: response, loading: false, error: null });
    } catch (error) {
      const errorMessage = error instanceof ApiClientError 
        ? error.message 
        : 'Failed to fetch products';
      set({ loading: false, error: errorMessage, products: [] });
    }
  },
  
  // ... implement other CRUD operations following the same pattern
  
  // UI state management
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearErrors: () => set({ 
    error: null, 
    createError: null, 
    updateError: null, 
    deleteError: null 
  }),
}));
```

### Step 4: Export Store (`store/index.ts`)

```typescript
// Add to existing exports
export { useProductsStore } from './products-store';
```

### Step 5: Create UI Page (`app/products/page.tsx`)

```typescript
'use client';

import { useEffect } from 'react';
import { useProductsStore } from '@/store/products-store';
import LoadingSpinner from '@/components/api/LoadingSpinner';
import ErrorMessage from '@/components/api/ErrorMessage';

export default function ProductsPage() {
  // Subscribe to store state
  const products = useProductsStore((state) => state.products);
  const loading = useProductsStore((state) => state.loading);
  const error = useProductsStore((state) => state.error);
  const { fetchProducts } = useProductsStore();
  
  // Fetch data on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  // Render logic
  if (loading) return <LoadingSpinner message="Loading products..." />;
  if (error) return <ErrorMessage message={error} onRetry={fetchProducts} />;
  
  return (
    <div>
      {/* Your products UI here */}
    </div>
  );
}
```

### Step 6: Add Navigation Link

Update `components/layout/Header.tsx` to include the new page:

```typescript
<Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
  Products
</Link>
```

## 🎯 Best Practices

### 1. Store Organization
- **One store per domain** (users, products, posts)
- **Separate loading states** for different operations
- **Clear error handling** with specific error messages
- **Optimistic updates** for better user experience

### 2. Type Safety
- **Interface-first design** - Define types before implementation
- **Generic patterns** - Reusable type definitions
- **Strict TypeScript** - Enable strict mode for better type checking

### 3. Error Handling
- **Custom error classes** for API-specific errors
- **Graceful degradation** - UI still works when APIs fail
- **User feedback** - Clear error messages and retry options
- **Rollback mechanisms** for optimistic updates

### 4. Performance
- **Selective subscriptions** - Only subscribe to needed state
- **Memoization** - Use React.memo for expensive components
- **Pagination** - Handle large datasets efficiently
- **Caching** - Store responses to avoid duplicate requests

### 5. Code Organization
- **Separation of concerns** - API, state, and UI layers
- **Reusable components** - Generic loading and error components
- **Consistent patterns** - Same structure for all API resources
- **Comprehensive documentation** - Comments explaining every concept

## 🧪 Testing Considerations

### Unit Testing Stores
```typescript
// Example test for counter store
import { useCounterStore } from '@/store/counter-store';

test('increment increases count by 1', () => {
  const { increment, reset } = useCounterStore.getState();
  reset();
  increment();
  expect(useCounterStore.getState().count).toBe(1);
});
```

### API Testing
```typescript
// Mock API client for testing
jest.mock('@/api/client', () => ({
  apiClient: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  }
}));
```

## 🔗 Integration with Backend

### Node.js/Express Backend
```javascript
// Example backend endpoints structure
app.get('/api/users', getUsersController);
app.post('/api/users', createUserController);
app.put('/api/users/:id', updateUserController);
app.delete('/api/users/:id', deleteUserController);
```

### NestJS Backend
```typescript
@Controller('users')
export class UsersController {
  @Get()
  async findAll(): Promise<User[]> { /* ... */ }
  
  @Post()
  async create(@Body() userData: CreateUserRequest): Promise<User> { /* ... */ }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() userData: UpdateUserRequest): Promise<User> { /* ... */ }
  
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> { /* ... */ }
}
```

## 🚀 Quick Start for Students

1. **Study the counter example** (`/counter`) to understand basic Zustand
2. **Explore the API demo** (`/api-demo`) to see real API integration
3. **Read the store files** to understand patterns and comments
4. **Try adding a new API** following the step-by-step guide above
5. **Experiment with the demo** - create, edit, delete users

## 🛠️ Next Steps

To make this production-ready, consider adding:

- **Authentication** - JWT token management
- **Caching** - Response caching with TTL
- **Offline Support** - Service workers and data persistence
- **Real-time Updates** - WebSocket integration
- **Testing** - Unit and integration tests
- **Monitoring** - API performance and error tracking

---

*This documentation serves as both a reference and educational material for understanding modern API management patterns in React applications.*