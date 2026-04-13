/**
 * ContentCard — Album/playlist card with hover play button
 * 
 * Vertical card: square image + title + description.
 * Green play button appears on hover.
 * 
 * TODO: Display album art image
 * TODO: Add green circular play button (appears on hover, slides up)
 * TODO: Wire play button to PlayerContext setTrack
 * TODO: Wire card click to navigation
 * 
 * Props to implement:
 * @param {object} item
 * @param {string} item.title
 * @param {string} item.description
 * @param {string} item.image
 * @param {string} item.type - 'playlist' | 'album' | 'radio'
 */

import styles from './ContentCard.module.css';

export default function ContentCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>🎵</div>
        {/* TODO: Green play button here */}
      </div>
      <div className={styles.info}>
        <span className={styles.title}>Card Title</span>
        <span className={styles.description}>Card description goes here</span>
      </div>
    </div>
  );
}
