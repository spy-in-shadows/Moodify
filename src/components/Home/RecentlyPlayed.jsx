/**
 * RecentlyPlayed — Grid of recently played items
 * 
 * 2-row, 3-column grid of small horizontal RecentCard items.
 * 
 * TODO: Import recently played data
 * TODO: Map data to RecentCard components
 * 
 * Props to implement:
 * @param {Array} items - Recently played items
 */

import styles from './RecentlyPlayed.module.css';
import RecentCard from './RecentCard';

export default function RecentlyPlayed() {
  return (
    <div className={styles.grid}>
      {/* TODO: Map over recentlyPlayed data */}
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
    </div>
  );
}
