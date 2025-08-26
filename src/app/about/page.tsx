import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          Welcome to our Next.js learning project! This application demonstrates
          modern React patterns and Next.js features.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js App Router and file-based routing</li>
          <li>Server and Client Components</li>
          <li>TypeScript integration</li>
          <li>Tailwind CSS styling</li>
          <li>Component composition patterns</li>
        </ul>
        
        <div className="mt-8">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </div>
  )
}