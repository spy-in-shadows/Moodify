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

export default function Player() {
  return (
    <footer className={styles.player}>
      Music Player / Controller
    </footer>
  );
}
