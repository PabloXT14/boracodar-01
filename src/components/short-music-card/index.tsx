import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from 'react-icons/io5'
import { Music } from '../@types/music'
import { useMusic } from '../../hooks/use-music'

type ShortMusicCardProps = {
  className?: string
  music: Music
}

export const ShortMusicCard = ({ className, music }: ShortMusicCardProps) => {
  const {
    audioRef,
    isPlaying,
    handleLoadedData,
    handleTimeUpdate,
    togglePlayPause,
    handleForward,
    handleRewind,
  } = useMusic()

  return (
    <div
      className={twMerge(
        'flex flex-col gap-7 rounded-lg bg-violet-950 p-7',
        className,
      )}
    >
      {/* Card Info  */}
      <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
        <div className="h-[190px] w-full overflow-hidden rounded-md sm:size-[84px]">
          <img src={bgMusic} alt="" className="h-full w-full object-cover" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-zinc-200">{music.name}</h2>
          <span className="text-xl font-normal text-zinc-200/65">
            {music.artist}
          </span>
        </div>
      </div>

      {/* Card Audio */}
      <audio
        ref={audioRef}
        src={music.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />

      {/* Card Actions */}
      <div className="mx-auto flex items-center gap-5 sm:gap-[50px]">
        <button className="text-zinc-200" onClick={handleRewind}>
          <IoPlayBack size={28} />
        </button>

        <button className="text-zinc-200" onClick={togglePlayPause}>
          {isPlaying ? <IoPause size={28} /> : <IoPlay size={28} />}
        </button>

        <button className="text-zinc-200" onClick={handleForward}>
          <IoPlayForward size={28} />
        </button>
      </div>
    </div>
  )
}
