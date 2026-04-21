import { useLocation, useParams } from 'react-router-dom'
import { albumsById } from '../../data/albums.js'
import { playlistsById } from '../../data/playlists.js'
import './Topbar.css'

const getTopbarContext = (pathname, type, id) => {
  if (pathname === '/') {
    return {
      eyebrow: 'Browse',
      title: 'Home',
      subtitle: 'Pick up where your soundtrack left off.',
    }
  }

  if (pathname === '/search') {
    return {
      eyebrow: 'Discover',
      title: 'Search',
      subtitle: 'Browse genres, moods, and fresh finds.',
    }
  }

  if (pathname === '/library') {
    return {
      eyebrow: 'Collection',
      title: 'Your Library',
      subtitle: 'Saved playlists, artists, and albums in one place.',
    }
  }

  if (pathname.startsWith('/collection/')) {
    const item = type === 'album' ? albumsById[id] : type === 'playlist' ? playlistsById[id] : null

    return {
      eyebrow: type === 'album' ? 'Album' : type === 'playlist' ? 'Playlist' : 'Collection',
      title: item?.title ?? 'Collection',
      subtitle: item?.description ?? 'Local collection details',
    }
  }

  return {
    eyebrow: 'Moodify',
    title: 'Browse',
    subtitle: 'Explore the latest local mock catalog.',
  }
}

const Topbar = () => {
  const location = useLocation()
  const { type, id } = useParams()
  const context = getTopbarContext(location.pathname, type, id)

  return (
    <header className="topbar">
      <div className="topbar__nav" aria-label="History">
        <button className="topbar__nav-button" type="button" aria-label="Go back" disabled>
          <span aria-hidden="true">←</span>
        </button>
        <button className="topbar__nav-button" type="button" aria-label="Go forward" disabled>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="topbar__context">
        <p className="topbar__eyebrow">{context.eyebrow}</p>
        <h1 className="topbar__title">{context.title}</h1>
        <p className="topbar__subtitle">{context.subtitle}</p>
      </div>
    </header>
  )
}

export default Topbar
