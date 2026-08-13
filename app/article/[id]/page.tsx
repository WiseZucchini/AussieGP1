import Header from '@/components/Header'

export default function ArticlePage({ params }: { params: { id: string } }) {
  // Sample article data - in production, fetch from database
  const article = {
    id: params.id,
    title: 'Australian GP 2024: Complete Analysis',
    author: 'John Smith',
    date: '2024-03-16',
    category: 'Analysis',
    readTime: 8,
    excerpt: 'A deep dive into the strategies, performance, and key moments from this year\'s Australian Grand Prix.',
    content: `
      <h2>Introduction</h2>
      <p>The 2024 Australian Grand Prix proved to be one of the most exciting races of the season...</p>
      
      <h2>Race Strategy</h2>
      <p>Teams employed various strategies to tackle the challenging Albert Park circuit...</p>
      
      <h2>Key Moments</h2>
      <p>Several pivotal moments defined the outcome of the race...</p>
      
      <h2>Conclusion</h2>
      <p>This race will be remembered for its intense competition and technical excellence...</p>
    `,
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto py-8 px-4">
        <header className="mb-8">
          <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
          
          <h1 className="text-5xl font-bold my-4">{article.title}</h1>
          
          <div className="flex gap-4 text-gray-600 border-b pb-4">
            <span className="font-medium text-gray-900">{article.author}</span>
            <span>•</span>
            <time>{new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 mb-8">{article.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <footer className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <p className="font-bold text-gray-900">{article.author}</p>
              <p className="text-sm text-gray-600">F1 Analyst and Motorsport Enthusiast</p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}
