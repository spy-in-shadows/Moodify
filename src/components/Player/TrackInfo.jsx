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
      <div className={styles.albumArt}>
        <img 
          src="https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb" 
          alt="Counting Stars" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
        />
      </div>
      <div className={styles.textInfo}>
        <span className={styles.trackName}>Counting Stars</span>
        <span className={styles.artistName}>OneRepublic</span>
      </div>
      <button className={styles.checkBtn}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="#1DB954">
          <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.844-8.835-4.835 4.835-2.28-2.28.983-.983 1.297 1.297 3.852-3.852.983.983z"></path>
        </svg>
      </button>
    </div>
  );
}
