'use client'

import { useState } from 'react'
import InstagramVideoPlayer from './instagram-video-player'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Video {
  id: string
  src: string
  title: string
}

interface VideoPlaylistProps {
  videos: Video[]
}

export default function VideoPlaylist({ videos }: VideoPlaylistProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  return (
    <Card className="w-full max-w-md bg-black/50 border-none">
      <CardContent className="p-6">
        <div className="relative">
          <InstagramVideoPlayer
            src={videos[currentVideoIndex].src}
            onEnded={handleNextVideo}
          />
          <button
            onClick={handlePreviousVideo}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextVideo}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <h2 className="text-xl font-semibold text-white mt-4 text-center">
          {videos[currentVideoIndex].title}
        </h2>
        <div className="flex justify-center mt-4 gap-2">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentVideoIndex ? 'bg-white' : 'bg-gray-500'
                }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

