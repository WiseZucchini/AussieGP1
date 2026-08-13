'use client'

import ArticleCard from './ArticleCard'

// Sample article data
const articles = [
  {
    id: 1,
    title: 'Australian GP 2024: Complete Analysis',
    excerpt: 'A deep dive into the strategies, performance, and key moments from this year\'s Australian Grand Prix.',
    date: '2024-03-16',
    author: 'John Smith',
    category: 'Analysis',
    readTime: 8,
  },
  {
    id: 2,
    title: 'Melbourne Circuit: History and Track Guide',
    excerpt: 'Everything about the iconic Albert Park circuit, from its history to the best overtaking spots.',
    date: '2024-03-15',
    author: 'Sarah Johnson',
    category: 'Guide',
    readTime: 6,
  },
  {
    id: 3,
    title: 'Weather Impact on F1 Performance',
    excerpt: 'How Australian weather conditions affect tire strategy and vehicle setup at the Grand Prix.',
    date: '2024-03-14',
    author: 'Mike Davis',
    category: 'Technical',
    readTime: 10,
  },
  {
    id: 4,
    title: 'Top 10 Memorable Moments at Albert Park',
    excerpt: 'Revisiting the most thrilling and controversial moments in Australian GP history.',
    date: '2024-03-13',
    author: 'Emma Wilson',
    category: 'History',
    readTime: 7,
  },
]

export default function ArticleList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
