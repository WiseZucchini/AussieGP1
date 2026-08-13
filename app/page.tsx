import Header from '@/components/Header'
import VideoGallery from '@/components/VideoGallery'
import ArticleList from '@/components/ArticleList'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">AussieGP</h1>
          <p className="text-xl text-gray-300">Your go-to source for Australian Grand Prix coverage, analysis, and more.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Videos</h2>
        <VideoGallery />
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <ArticleList />
        </div>
      </section>
    </main>
  )
}
