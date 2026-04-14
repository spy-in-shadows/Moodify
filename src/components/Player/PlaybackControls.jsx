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
      <button className={styles.controlBtn}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.59 2.768 1.57l.088.14-1.332 1.637-.087-.14a1.862 1.862 0 0 0-1.437-.707zM12.151 15.078a.75.75 0 1 0-1.06-1.06l1.018-1.018H11.16a2.25 2.25 0 0 1-1.724-.804l-1.411-1.68 1.332-1.637 1.517 1.808a3.75 3.75 0 0 0 2.873 1.34h1.947l-1.017-1.018a.75.75 0 1 0 1.06-1.06l2.829 2.828-2.829 2.828z"></path></svg>
      </button>
      <button className={styles.controlBtn}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.9-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
      </button>
      <button className={styles.playButton}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
      </button>
      <button className={styles.controlBtn}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.1 1.106A.7.7 0 0 0 1.05 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
      </button>
      <button className={styles.controlBtn}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
      </button>
    </div>
  );
}
