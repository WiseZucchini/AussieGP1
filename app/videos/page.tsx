import Header from '@/components/Header'
import VideoGallery from '@/components/VideoGallery'

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">All Videos</h1>
          <p className="text-gray-300 mt-2">Watch our latest F1 and Australian GP coverage</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <VideoGallery />
      </section>
    </main>
  )
}
