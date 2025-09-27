/**
 * Sidebar Component
 * 
 * Mobile and desktop sidebar navigation component.
 * 
 * Responsibilities:
 * - Render sidebar navigation menu
 * - Handle responsive sidebar behavior
 * - Manage sidebar open/close state
 * - Provide navigation links and user actions
 */

'use client';

import { useAppStore } from '@/store/app-store';
import Link from 'next/link';

export function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  if (!sidebarOpen) return null;

  return (
    <div className=\"fixed inset-0 z-50 lg:hidden\">
      <div className=\"fixed inset-0 bg-black/20\" onClick={() => setSidebarOpen(false)} />
      <nav className=\"fixed top-0 left-0 bottom-0 w-64 bg-white shadow-xl\">
        <div className=\"p-4\">
          <div className=\"flex items-center justify-between mb-8\">
            <h2 className=\"text-lg font-semibold\">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className=\"p-2 hover:bg-gray-100 rounded-md\"
            >
              ✕
            </button>
          </div>
          
          <div className=\"space-y-2\">
            <Link
              href=\"/\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              href=\"/about\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              About
            </Link>
            <Link
              href=\"/menu\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              Menu
            </Link>
            <Link
              href=\"/locations\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href=\"/contact\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              Contact
            </Link>
            <Link
              href=\"/get-started\"
              className=\"block px-3 py-2 rounded-md hover:bg-gray-100\"
              onClick={() => setSidebarOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}