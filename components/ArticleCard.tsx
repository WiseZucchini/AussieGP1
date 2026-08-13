'use client'

import Link from 'next/link'

interface ArticleCardProps {
  article: {
    id: number
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    readTime: number
  }
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">
            {article.readTime} min read
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
          <div>
            <span className="font-medium text-gray-700">{article.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
