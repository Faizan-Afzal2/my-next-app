export const APP_NAME = 'My Next App'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const

export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts'
} as const

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user-preferences',
  THEME: 'theme'
} as const