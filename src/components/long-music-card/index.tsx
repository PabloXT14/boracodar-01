import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import { IoPlay, IoPlayBack, IoPlayForward, IoPause } from 'react-icons/io5'
import { formatTime } from '../../utils/formate-time'
import { Music } from '../@types/music'
import { useMusic } from '../../hooks/use-music'

type LongMusicCardProps = {
  className?: string
  music: Music
}

export const LongMusicCard = ({ className, music }: LongMusicCardProps) => {
  const {
    audioRef,
    currentTime,
    duration,
    isPlaying,
    handleLoadedData,
    handleTimeUpdate,
    togglePlayPause,
    handleSeek,
    handleForward,
    handleRewind,
  } = useMusic()

  return (
    <div
      className={twMerge(
        'flex w-full flex-col gap-7 overflow-hidden rounded-lg bg-violet-950 p-7 md:h-full md:px-9 md:py-12',
        className,
      )}
    >
      {/* Card Image */}
      <div className="h-[190px] w-full overflow-hidden rounded-md">
        <img src={bgMusic} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Card Info */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-200">{music.name}</h2>
        <span className="text-xl font-normal text-zinc-200/65">
          {music.artist}
        </span>
      </div>

      {/* Card Actions */}
      <div className="mx-auto flex items-center gap-5 sm:gap-12 md:mx-0 md:justify-between">
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

      {/* Card Audio */}
      <audio
        ref={audioRef}
        src={music.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />

      {/* Card Timeline */}
      <div className="flex flex-col gap-2.5">
        <input
          type="range"
          value={currentTime}
          max={duration}
          className="h-1.5 w-full cursor-pointer appearance-none overflow-hidden rounded-full border-none bg-zinc-300/30 outline-none [&::-webkit-slider-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-300 [&::-webkit-slider-thumb]:shadow-[-403px_0_0_400px] [&::-webkit-slider-thumb]:shadow-zinc-300"
          onChange={handleSeek}
        />
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal text-zinc-400">
            {formatTime(currentTime)}
          </span>
          <span className="text-sm font-normal text-zinc-400">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  )
}
