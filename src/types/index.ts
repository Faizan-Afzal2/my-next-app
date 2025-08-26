export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Post {
  id: string
  title: string
  content: string
  author: User
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export type Theme = 'light' | 'dark'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'