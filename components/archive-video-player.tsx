"use client"

import { useState, useRef } from 'react'
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ArchiveVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  // When video ends, reset play state
  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div className="aspect-video relative group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="/placeholder.svg?height=720&width=1280&text=Archive+Aerial+View"
        onEnded={handleVideoEnd}
        muted={isMuted}
        playsInline
        loop={false}
      >
        <source src="/videos/archive-aerialview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay with text when not playing */}
      <div className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Button
          onClick={togglePlay}
          variant="ghost"
          size="lg"
          className="rounded-full bg-white/20 hover:bg-white/30 text-white h-16 w-16"
        >
          <Play className="h-8 w-8 pl-1" />
        </Button>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
              <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
            </Button>

            <Button
              onClick={toggleMute}
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
              <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
            </Button>
          </div>

          <Button
            onClick={handleFullscreen}
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Fullscreen</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
