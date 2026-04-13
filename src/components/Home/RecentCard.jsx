/**
 * RecentCard — Small horizontal card for recently played
 * 
 * TODO: Show album art (left) + title (right)
 * TODO: Add green play button on hover
 * TODO: Add click navigation to playlist/album
 * 
 * Props to implement:
 * @param {object} item
 * @param {string} item.title
 * @param {string} item.image
 * @param {string} item.type - 'playlist' | 'album'
 */

import styles from './RecentCard.module.css';

export default function RecentCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>🎵</div>
      <span className={styles.title}>Playlist Name</span>
      {/* TODO: Play button on hover */}
    </div>
  );
}
