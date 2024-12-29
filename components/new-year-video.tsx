'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from 'lucide-react'
import InstagramVideoPlayer from './instagram-video-player'

export default function NewYearVideo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/50 border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h1 className="text-2xl md:text-2xl font-bold text-center bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
              Happy New Year 2025!
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <InstagramVideoPlayer src="/assets/video.mp4" />

          <p className="text-center mt-6 text-gray-300">
            Wishing you a wonderful year ahead filled with joy and success! 🎉
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

