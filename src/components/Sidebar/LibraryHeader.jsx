/**
 * LibraryHeader — "Your Library" header with action buttons
 * 
 * TODO: Add library icon
 * TODO: Add "+" create playlist button
 * TODO: Add expand/collapse icon
 */

import styles from './LibraryHeader.module.css';

export default function LibraryHeader() {
  return (
    <div className={styles.header}>
      <span>📚 Your Library</span>
      <span>+ ➡</span>
    </div>
  );
}
