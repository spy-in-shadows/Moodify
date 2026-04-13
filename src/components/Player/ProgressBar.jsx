/**
 * ProgressBar — Track seek bar with timestamps
 * 
 * TODO: Implement as range input slider
 * TODO: Show elapsed time (left) and total duration (right)
 * TODO: Style with green fill on hover (Spotify behavior)
 * TODO: Connect to PlayerContext progress state
 */

import styles from './ProgressBar.module.css';

export default function ProgressBar() {
  return (
    <div className={styles.progressContainer}>
      <span className={styles.time}>0:00</span>
      <div className={styles.bar}>{/* TODO: Range input slider */}</div>
      <span className={styles.time}>3:50</span>
    </div>
  );
}
