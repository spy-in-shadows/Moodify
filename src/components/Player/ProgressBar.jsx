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
      <span className={styles.time}>1:14</span>
      <div className={styles.barContainer}>
        <div className={styles.barBg}>
          <div className={styles.barProgress} style={{ width: '30%' }}></div>
        </div>
      </div>
      <span className={styles.time}>4:17</span>
    </div>
  );
}
