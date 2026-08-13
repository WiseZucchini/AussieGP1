import Header from '@/components/Header'

export default function VideoPage({ params }: { params: { id: string } }) {
  // Sample video data - in production, fetch from database
  const video = {
    id: params.id,
    title: 'F1 2024 Australian GP Preview',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Everything you need to know about the upcoming Australian Grand Prix race.',
    fullContent: 'This is the full video page content. Here you can embed the YouTube player and display related information.',
    date: '2024-03-15',
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4">{video.title}</h1>
        
        <div className="mb-6 text-gray-600">
          <p>{new Date(video.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700">{video.description}</p>
          <p className="text-gray-600 mt-6">{video.fullContent}</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-4">Related Videos</h3>
          <p className="text-gray-600">More videos will appear here...</p>
        </div>
      </div>
    </main>
  )
}
