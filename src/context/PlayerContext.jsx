/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const PlayerContext = createContext(null)

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrackState] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [queue] = useState([])

  const setCurrentTrack = (track) => {
    setCurrentTrackState(track ?? null)
  }

  const playTrack = (track) => {
    if (track) {
      setCurrentTrackState(track)
      setIsPlaying(true)
      return
    }

    if (currentTrack) {
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    if (!currentTrack) {
      return
    }

    setIsPlaying((previousState) => !previousState)
  }

  const value = {
    currentTrack,
    isPlaying,
    queue,
    setCurrentTrack,
    playTrack,
    togglePlay,
  }

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }

  return context
}
