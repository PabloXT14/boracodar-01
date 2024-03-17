import { ChangeEvent, useEffect, useRef, useState } from 'react'

export const useMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const volume = 0.4

  const togglePlayPause = () => {
    const audio = audioRef.current

    if (!audio) return

    if (isPlaying) audio.pause()
    else audio.play()

    setIsPlaying((prevState) => !prevState)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current

    if (!audio) return

    setCurrentTime(audio.currentTime)
  }

  const handleLoadedData = () => {
    const audio = audioRef.current

    if (!audio) return

    setDuration(audio.duration)
  }

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current

    if (!audio) return

    const seekTime = Number(event.target.value)
    audio.currentTime = seekTime ?? 0
    setCurrentTime(seekTime)
  }

  const handleRewind = () => {
    const audio = audioRef.current

    if (!audio) return

    audio.currentTime -= 10
  }

  const handleForward = () => {
    const audio = audioRef.current

    if (!audio) return

    audio.currentTime += 10
  }

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      audio.volume = volume
    }
  }, [])

  useEffect(() => {
    if (currentTime === duration) {
      setIsPlaying(false)
    }
  }, [currentTime, duration])

  return {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    handleTimeUpdate,
    handleLoadedData,
    handleSeek,
    handleRewind,
    handleForward,
  }
}
