import { Sparkles } from 'lucide-react'
import VideoPlaylist from './video-playlist'

const videos = [
  { id: '1', src: '/assets/video.mp4', title: 'Happy New Year 2025!' },
  { id: '2', src: '/assets/fulstack-tech.mp4', title: 'Fullstack 2024' },
]

export default function NewYearVideo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <h1 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
            New Year Celebration
          </h1>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>

        <VideoPlaylist videos={videos} />

        <p className="text-center mt-6 text-gray-300">
          Wishing you a wonderful year ahead filled with joy and success! 🎉
        </p>
      </div>
    </div>
  )
}

