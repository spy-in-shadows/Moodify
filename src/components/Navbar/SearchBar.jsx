/**
 * SearchBar — Search input with icon
 * 
 * TODO: Add search icon (SVG)
 * TODO: Implement controlled input with onChange
 * TODO: Add clear button when query is non-empty
 * TODO: Wire to search results page / filter
 * 
 * Props to implement:
 * @param {Function} onSearch - Callback with search query
 */

import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <span>🔍</span>
      <span className={styles.placeholder}>What do you want to play?</span>
    </div>
  );
}
