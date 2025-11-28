'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AudioPlayerContextType {
  audioSrc: string | null
  audioTitle: string | null
  setAudio: (src: string | null, title?: string | null) => void
  clearAudio: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined)

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null)
  const [audioTitle, setAudioTitle] = useState<string | null>(null)

  const setAudio = (src: string | null, title?: string | null) => {
    setAudioSrc(src)
    setAudioTitle(title ?? null)
  }

  const clearAudio = () => {
    setAudioSrc(null)
    setAudioTitle(null)
  }

  return (
    <AudioPlayerContext.Provider value={{ audioSrc, audioTitle, setAudio, clearAudio }}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider')
  }
  return context
}

// Component to set audio for a page - renders nothing, just sets context
// Use this in page components that have audio
interface PageAudioProps {
  src: string
  title?: string
}

export function PageAudio({ src, title }: PageAudioProps) {
  const { setAudio, clearAudio } = useAudioPlayer()

  useEffect(() => {
    setAudio(src, title)

    // Clear audio when navigating away from page
    return () => {
      clearAudio()
    }
  }, [src, title, setAudio, clearAudio])

  return null
}
