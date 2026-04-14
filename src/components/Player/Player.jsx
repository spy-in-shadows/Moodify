/**
 * Player — Bottom player bar container
 * 
 * TODO: Build out with these child components:
 *   Left:   TrackInfo (album art, track name, artist)
 *   Center: PlaybackControls (shuffle, prev, play/pause, next, repeat) + ProgressBar (seek slider)
 *   Right:  VolumeControl (slider + mute) + ExtraControls (queue, devices, fullscreen)
 * 
 * TODO: Connect to PlayerContext for current track and playback state
 */

import styles from './Player.module.css';
import TrackInfo from './TrackInfo';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import ExtraControls from './ExtraControls';

export default function Player() {
  return (
    <footer className={styles.player}>
      <div className={styles.left}>
        <TrackInfo />
      </div>
      <div className={styles.center}>
        <PlaybackControls />
        <ProgressBar />
      </div>
      <div className={styles.right}>
        <ExtraControls />
        <VolumeControl />
        <button style={{ marginLeft: '8px', cursor: 'pointer', background: 'transparent', border: 'none', color: '#b3b3b3' }}>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.27 1.159v6.524h11.46V1.16H2.27zm0 13.682v-5.127h11.46v5.127H2.27z"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
