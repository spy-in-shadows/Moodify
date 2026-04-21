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

export default function PlaylistItem({ item, isActive = false, onClick }) {
  if (!item) return null;
  return (
    <button
      type="button"
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <div 
        className={styles.imageContainer} 
        style={{ borderRadius: '4px' }}
      >
        <img src={item.cover} alt={item.title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <span className={styles.name} style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.title}</span>
        <span className={styles.meta}>
          {item.artist} {item.meta && `• ${item.meta}`}
        </span>
      </div>
    </button>
  );
}
