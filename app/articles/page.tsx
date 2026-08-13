import Header from '@/components/Header'
import ArticleList from '@/components/ArticleList'

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">All Articles</h1>
          <p className="text-gray-300 mt-2">In-depth analysis and coverage of F1 and Australian GP</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <ArticleList />
      </section>
    </main>
  )
}
