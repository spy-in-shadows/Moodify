/**
 * TrackInfo — Currently playing track information
 * 
 * TODO: Show album art (48x48), track name, artist name(s)
 * TODO: Add like/heart button
 * TODO: Connect to PlayerContext for currentTrack data
 */

import styles from './TrackInfo.module.css';

export default function TrackInfo() {
  return (
    <div className={styles.trackInfo}>
      <div className={styles.albumArt}>🎵</div>
      <div className={styles.textInfo}>
        <span className={styles.trackName}>Track Name</span>
        <span className={styles.artistName}>Artist Name</span>
      </div>
      {/* TODO: Like/heart button */}
    </div>
  );
}
