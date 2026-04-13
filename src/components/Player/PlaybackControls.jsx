/**
 * PlaybackControls — Playback control buttons
 * 
 * Layout: Shuffle | Previous | Play/Pause | Next | Repeat
 * 
 * TODO: Add SVG icons for each button
 * TODO: Connect Play/Pause to PlayerContext togglePlay
 * TODO: Connect Shuffle/Repeat to their respective toggles
 * TODO: Play/Pause should be a larger circular white button
 */

import styles from './PlaybackControls.module.css';

export default function PlaybackControls() {
  return (
    <div className={styles.controls}>
      <button>🔀</button>
      <button>⏮</button>
      <button className={styles.playButton}>▶</button>
      <button>⏭</button>
      <button>🔁</button>
    </div>
  );
}
