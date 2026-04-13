/**
 * FilterChips — Library filter pill buttons
 * 
 * Toggleable pills: "Playlists", "Artists"
 * 
 * TODO: Implement active state toggle
 * TODO: Add clear filter button when a filter is active
 * 
 * Props to implement:
 * @param {string} activeFilter - 'all' | 'playlists' | 'artists'
 * @param {Function} onFilterChange - Callback when filter changes
 */

import styles from './FilterChips.module.css';

export default function FilterChips() {
  return (
    <div className={styles.container}>
      <button className={styles.chip}>Playlists</button>
      <button className={styles.chip}>Artists</button>
    </div>
  );
}
