'use client'

import VideoCard from './VideoCard'

// Sample video data - replace with your YouTube videos
const videos = [
  {
    id: 1,
    title: 'F1 2024 Australian GP Preview',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Everything you need to know about the upcoming Australian Grand Prix race.',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Race Highlights - Melbourne Circuit',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Best moments from the Australian Grand Prix.',
    date: '2024-03-16',
  },
  {
    id: 3,
    title: 'Driver Interview - Champion Talk',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Exclusive interview with the race winner.',
    date: '2024-03-17',
  },
]

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
