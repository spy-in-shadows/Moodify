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
import { usePlayer } from '../../context/PlayerContext';

export default function PlaylistList() {
  const { currentTrack, playTrack } = usePlayer();

  const libraryTracks = [
    {
      id: 'liked-songs',
      title: 'Liked Songs',
      artist: 'Your Library',
      meta: 'Saved collection',
      cover: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    },
    {
      id: staticData.sidebar[0].id,
      title: staticData.sidebar[0].name,
      artist: staticData.sidebar[0].owner,
      meta: staticData.sidebar[0].type,
      cover: staticData.sidebar[0].image,
    },
    {
      id: staticData.recommended[1].id,
      title: staticData.recommended[1].title,
      artist: staticData.recommended[1].description,
      meta: staticData.recommended[1].type,
      cover: staticData.recommended[1].image,
    },
    {
      id: staticData.recommended[2].id,
      title: staticData.recommended[2].title,
      artist: staticData.recommended[2].description,
      meta: staticData.recommended[2].type,
      cover: staticData.recommended[2].image,
    },
    {
      id: staticData.recommended[4].id,
      title: staticData.recommended[4].title,
      artist: staticData.recommended[4].description,
      meta: staticData.recommended[4].type,
      cover: staticData.recommended[4].image,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <span style={{ fontSize: '16px', cursor: 'pointer' }}>🔍</span>
        <span style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '4px' }}>
          Library Tracks
          <span style={{ fontSize: '18px' }}>≡</span>
        </span>
      </div>
      <div className={styles.list}>
        {libraryTracks.map((item) => (
          <PlaylistItem
            key={item.id}
            item={item}
            isActive={currentTrack?.id === item.id}
            onClick={() => playTrack(item)}
          />
        ))}
      </div>
    </div>
  );
}
