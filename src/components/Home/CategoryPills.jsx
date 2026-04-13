/**
 * CategoryPills — Top filter tabs (All / Music / Podcasts)
 * 
 * TODO: Implement active state toggle
 * TODO: Wire to content filtering logic
 * 
 * Props to implement:
 * @param {string} activeCategory - Currently selected
 * @param {Function} onCategoryChange - Callback
 */

import styles from './CategoryPills.module.css';

export default function CategoryPills() {
  return (
    <div className={styles.container}>
      <button className={`${styles.pill} ${styles.active}`}>All</button>
      <button className={styles.pill}>Music</button>
      <button className={styles.pill}>Podcasts</button>
    </div>
  );
}
