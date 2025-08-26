import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Next.js Learning Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive project to help interns master Next.js, React, and modern web development practices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            📁 Organized Structure
          </h3>
          <p className="text-gray-600 mb-4">
            Learn industry-standard folder organization and component architecture patterns.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            🎨 Modern Styling
          </h3>
          <p className="text-gray-600 mb-4">
            Master Tailwind CSS and responsive design principles for beautiful UIs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            ⚡ Best Practices
          </h3>
          <p className="text-gray-600 mb-4">
            Implement TypeScript, custom hooks, and reusable components effectively.
          </p>
        </div>
      </div>

      <div className="text-center space-x-4">
        <Link href="/about">
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </Link>
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Project Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Next.js 15 with App Router
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              TypeScript for type safety
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Tailwind CSS for styling
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Reusable UI components
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Custom React hooks
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Utility functions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Organized file structure
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Modern development patterns
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
