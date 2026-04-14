/**
 * VolumeControl — Volume slider with mute toggle
 * 
 * TODO: Add volume icon (changes based on level: high/low/mute)
 * TODO: Implement range input slider (0-100)
 * TODO: Click icon to toggle mute
 * TODO: Connect to PlayerContext volume state
 */

import styles from './VolumeControl.module.css';

export default function VolumeControl() {
  return (
    <div className={styles.volumeControl}>
      <button className={styles.controlBtn}>
        <svg role="presentation" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path></svg>
      </button>
      <div className={styles.barContainer}>
        <div className={styles.barBg}>
          <div className={styles.barProgress} style={{ width: '40%' }}></div>
        </div>
      </div>
    </div>
  );
}
