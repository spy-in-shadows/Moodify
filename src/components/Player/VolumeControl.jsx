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
      <button>🔊</button>
      <div className={styles.slider}>{/* TODO: Range input */}</div>
    </div>
  );
}
