/**
 * PlaylistItem — Single playlist/artist row in the sidebar
 * 
 * TODO: Display album art thumbnail (48x48)
 * TODO: Show playlist name + type/owner subtitle
 * TODO: Artists get circular images, playlists get square
 * TODO: Add click handler for navigation
 * 
 * Props to implement:
 * @param {object} item - Playlist or artist data
 * @param {string} item.name - Display name
 * @param {string} item.type - 'Playlist' | 'Artist'
 * @param {string} item.owner - Owner name
 * @param {string} item.image - Cover image URL
 */

import styles from './PlaylistItem.module.css';

export default function PlaylistItem() {
  return (
    <div className={styles.item}>
      <div className={styles.imagePlaceholder}>🎵</div>
      <div className={styles.info}>
        <span className={styles.name}>Playlist Name</span>
        <span className={styles.meta}>Playlist • owner</span>
      </div>
    </div>
  );
}
