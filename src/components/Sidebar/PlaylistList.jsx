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
import staticData from '../../../static_data.json';

export default function PlaylistList() {
  const playlistItems = [
    {
      id: 'liked-songs',
      name: 'Liked Songs',
      type: 'Playlist',
      owner: '67 songs',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
      isArtist: false
    },
    ...staticData.sidebar
  ];

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <span style={{ fontSize: '16px', cursor: 'pointer' }}>🔍</span>
        <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
          Recents 
          <span style={{ fontSize: '18px' }}>≡</span>
        </span>
      </div>
      <div className={styles.list}>
        {playlistItems.map((item) => (
          <PlaylistItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
