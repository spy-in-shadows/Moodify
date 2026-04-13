/**
 * PlaylistList — Scrollable list of playlists and artists
 * 
 * TODO: Import playlist data from static_data.json or mockData.js
 * TODO: Add search bar for filtering library items
 * TODO: Add sort option (Recents, Recently Added, Alphabetical)
 * TODO: Map data to PlaylistItem components
 * 
 * Props to implement:
 * @param {string} filter - Active filter ('all' | 'playlists' | 'artists')
 */

import styles from './PlaylistList.module.css';
import PlaylistItem from './PlaylistItem';

export default function PlaylistList() {
  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <span>🔍</span>
        <span>Recents ≡</span>
      </div>
      <div className={styles.list}>
        {/* TODO: Map over playlist/artist data here */}
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </div>
    </div>
  );
}
