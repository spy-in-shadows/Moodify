/**
 * TrackInfo — Currently playing track information
 * 
 * TODO: Show album art (48x48), track name, artist name(s)
 * TODO: Add like/heart button
 * TODO: Connect to PlayerContext for currentTrack data
 */

import styles from './TrackInfo.module.css';
import { usePlayer } from '../../context/PlayerContext';

export default function TrackInfo() {
  const { currentTrack, isPlaying } = usePlayer();

  return (
    <div className={styles.trackInfo}>
      <div className={styles.albumArt}>
        <img 
          src={currentTrack.cover}
          alt={currentTrack.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
        />
      </div>
      <div className={styles.textInfo}>
        <span className={styles.trackName}>{currentTrack.title}</span>
        <span className={styles.artistName}>{currentTrack.artist}</span>
      </div>
      <span className={styles.status} aria-live="polite">
        {isPlaying ? 'Playing' : 'Paused'}
      </span>
      <button className={styles.checkBtn} aria-label="Track selected">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="#1DB954">
          <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.844-8.835-4.835 4.835-2.28-2.28.983-.983 1.297 1.297 3.852-3.852.983.983z"></path>
        </svg>
      </button>
    </div>
  );
}
