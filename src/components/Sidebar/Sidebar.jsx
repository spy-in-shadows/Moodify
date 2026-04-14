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
      {/* Library section */}
      <div className={styles.librarySection}>
        <LibraryHeader />
        <FilterChips />
        <PlaylistList />
      </div>
    </aside>
  );
}
