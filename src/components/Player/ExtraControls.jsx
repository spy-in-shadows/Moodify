/**
 * ExtraControls — Secondary player controls
 * 
 * TODO: Add icons for: Lyrics, Queue, Devices, Fullscreen
 * TODO: Wire each button to its respective feature
 */

import styles from './ExtraControls.module.css';

export default function ExtraControls() {
  return (
    <div className={styles.extraControls}>
      <button>🎤</button>
      <button>📋</button>
      <button>💻</button>
      <button>⛶</button>
    </div>
  );
}
