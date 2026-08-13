'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-red-600">
          AussieGP
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 flex-col md:flex-row`}>
          <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
          <Link href="/videos" className="text-gray-700 hover:text-red-600 font-medium">Videos</Link>
          <Link href="/articles" className="text-gray-700 hover:text-red-600 font-medium">Articles</Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">About</Link>
        </div>
      </nav>
    </header>
  )
}
