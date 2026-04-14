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

export default function ContentCard({ item }) {
  if (!item) return null;
  // If it's an artist, the image is a circle.
  const isArtist = item.type === 'Artist';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={item.image} 
          alt={item.title} 
          className={styles.image} 
          style={{ borderRadius: isArtist ? '50%' : '8px' }}
        />
        {/* Play button here */}
        <div className={styles.playButtonWrapper}>
          <button className={styles.playButton} aria-label="Play">
            ▶
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.title} style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.title}</span>
        <span className={styles.description} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</span>
      </div>
    </div>
  );
}
