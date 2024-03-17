import { LongMusicCard } from './components/long-music-card'
import { MiddleMusicCard } from './components/middle-music-card'
import { ShortMusicCard } from './components/short-music-card'
import { Music } from './components/@types/music'
import musicUrl01 from './assets/musics/Build The Future - DoWhile 2021 Theme.mp3'
import musicUrl02 from './assets/musics/Never Stop Learning - Do While 2020 Theme.mp3'
import musicUrl03 from './assets/musics/Show me the Code - Temporada 01 (Theme).mp3'

export function App() {
  const music1: Music = {
    url: musicUrl01,
    name: 'Build The Future',
    artist: 'Banda Rocketseat',
  }

  const music2: Music = {
    url: musicUrl02,
    name: 'Never Stop Learning',
    artist: 'Banda Rocketseat',
  }

  const music3: Music = {
    url: musicUrl03,
    name: 'Show me the Code',
    artist: 'Banda Rocketseat',
  }

  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="grid w-full gap-8 px-4 py-8 align-middle md:w-fit md:grid-cols-[266px_357px] md:grid-rows-[auto_1fr]">
        <LongMusicCard className="md:row-span-2 md:h-[498px]" music={music1} />
        <MiddleMusicCard className="h-fit" music={music2} />
        <ShortMusicCard className="" music={music3} />
      </div>
    </div>
  )
}
