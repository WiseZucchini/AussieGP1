'use client'

import Image from 'next/image'
import Link from 'next/link'

interface VideoCardProps {
  video: {
    id: number
    title: string
    youtubeId: string
    description: string
    date: string
  }
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`

  return (
    <Link href={`/video/${video.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
            <svg className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
          <p className="text-gray-500 text-xs">
            {new Date(video.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </Link>
  )
}
