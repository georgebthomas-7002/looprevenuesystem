'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react'
import { useAudioPlayer } from './AudioPlayerContext'

interface ReadToMePlayerProps {
  audioSrc?: string
  title?: string
}

// Standalone player component (can be used with direct props)
export function ReadToMePlayer({ audioSrc, title = 'Listen to this page' }: ReadToMePlayerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [isLoaded, setIsLoaded] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }, [isMuted])

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }, [isMuted])

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current || !duration) return

    const rect = progressRef.current.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    const newTime = clickPosition * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }, [duration])

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Reset state when audio source changes
  useEffect(() => {
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setIsLoaded(false)
  }, [audioSrc])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audioSrc])

  // Close panel when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Don't render if no audio source (after all hooks)
  if (!audioSrc) return null

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Container for the entire component */}
      <div className="fixed left-0 top-[40%] z-50 flex items-start">
        {/* Sliding Panel */}
        <div
          className={`
            bg-surface shadow-lg rounded-r-lg overflow-hidden
            transition-all duration-300 ease-out
            ${isOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <div className="w-80 p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-sm font-semibold text-text-primary truncate pr-2">
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-bg-alt transition-colors flex-shrink-0"
                aria-label="Close player"
              >
                <X className="w-4 h-4 text-text-muted" />
              </button>
            </div>

            {/* Play Button & Time */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={togglePlay}
                disabled={!isLoaded}
                className="w-12 h-12 rounded-full bg-brand-navy text-text-inverse flex items-center justify-center hover:bg-brand-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="text-xs text-text-muted mb-1">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                {/* Progress Bar */}
                <div
                  ref={progressRef}
                  onClick={handleProgressClick}
                  className="h-2 bg-bg-alt rounded-full cursor-pointer group"
                >
                  <div
                    className="h-full bg-brand-navy rounded-full relative transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-navy rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMute}
                className="p-1.5 rounded hover:bg-bg-alt transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-text-muted" />
                ) : (
                  <Volume2 className="w-4 h-4 text-text-muted" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1.5 bg-bg-alt rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-brand-navy
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-3
                  [&::-moz-range-thumb]:h-3
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-brand-navy
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
                aria-label="Volume"
              />
            </div>
          </div>
        </div>

        {/* Vertical Tab Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center
            bg-brand-navy text-text-inverse
            py-4 px-2
            rounded-r-lg
            shadow-md hover:shadow-lg
            hover:bg-brand-teal
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2
            ${isOpen ? 'rounded-r-none' : ''}
          `}
          aria-label={isOpen ? 'Close audio player' : 'Open audio player'}
          aria-expanded={isOpen}
        >
          <span
            className="font-body text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Read it To Me
          </span>
        </button>
      </div>
    </>
  )
}

// Context-aware player that gets audio from AudioPlayerContext
export function GlobalReadToMePlayer() {
  const { audioSrc, audioTitle } = useAudioPlayer()

  return (
    <ReadToMePlayer
      audioSrc={audioSrc || undefined}
      title={audioTitle || 'Listen to this page'}
    />
  )
}
