import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="pt-20 px-4 min-h-screen bg-brand-surface">
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-brand-primary mb-8">
          Manage your services, points, and customers efficiently.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors">
            Get Started
          </Link>
          <Link to="/provider" className="px-6 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary/10 transition-colors">
            Provider Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
