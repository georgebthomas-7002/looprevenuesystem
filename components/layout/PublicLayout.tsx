import { Header } from './Header'
import { Footer } from './Footer'
import { AudioPlayerProvider } from '../AudioPlayerContext'
import { GlobalReadToMePlayer } from '../ReadToMePlayer'

interface PublicLayoutProps {
  children: React.ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <AudioPlayerProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GlobalReadToMePlayer />
      </div>
    </AudioPlayerProvider>
  )
}
