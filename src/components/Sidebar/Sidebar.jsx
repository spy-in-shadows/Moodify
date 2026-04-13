/**
 * Sidebar — Left sidebar container
 * 
 * Contains:
 * - App logo / branding
 * - Navigation links (Home, Search)
 * - Library section (LibraryHeader, FilterChips, PlaylistList)
 * 
 * TODO: Implement navigation links
 * TODO: Responsive — collapse to icons on tablet, hide on mobile
 */

import styles from './Sidebar.module.css';
import LibraryHeader from './LibraryHeader';
import FilterChips from './FilterChips';
import PlaylistList from './PlaylistList';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Navigation section */}
      <nav className={styles.navSection}>
        <div className={styles.navItem}>🏠 Home</div>
        <div className={styles.navItem}>🔍 Search</div>
      </nav>

      {/* Library section */}
      <div className={styles.librarySection}>
        <LibraryHeader />
        <FilterChips />
        <PlaylistList />
      </div>
    </aside>
  );
}
