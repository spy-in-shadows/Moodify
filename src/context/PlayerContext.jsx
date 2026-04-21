/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const DEFAULT_TRACK = {
  id: 'default-track',
  title: 'Counting Stars',
  artist: 'OneRepublic',
  cover: 'https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb',
};

const PlayerContext = createContext(undefined);

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(DEFAULT_TRACK);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    if (!track) return;

    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying((playing) => (currentTrack ? !playing : false));
  };

  const value = {
    currentTrack,
    isPlaying,
    playTrack,
    togglePlay,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }

  return context;
}
