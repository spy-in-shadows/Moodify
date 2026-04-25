import { useLocation, useParams } from 'react-router-dom'
import { albumsById } from '../../data/albums.js'
import { playlistsById } from '../../data/playlists.js'
import './Topbar.css'

const getPageTitle = (pathname, type, id) => {
  if (pathname === '/') return 'Good evening'
  if (pathname === '/search') return 'Search'
  if (pathname === '/library') return 'Your Library'

  if (pathname.startsWith('/collection/')) {
    const item = type === 'album' ? albumsById[id] : type === 'playlist' ? playlistsById[id] : null
    return item?.title ?? 'Collection'
  }

  return 'Moodify'
}

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const Topbar = () => {
  const location = useLocation()
  const { type, id } = useParams()
  const isHome = location.pathname === '/'
  const title = isHome ? getGreeting() : getPageTitle(location.pathname, type, id)

  return (
    <header className="topbar" aria-label="Top navigation">
      <div className="topbar__nav" aria-label="History navigation">
        <button
          className="topbar__nav-button"
          type="button"
          aria-label="Go back"
          disabled
        >
          ‹
        </button>
        <button
          className="topbar__nav-button"
          type="button"
          aria-label="Go forward"
          disabled
        >
          ›
        </button>
      </div>
      <div className="topbar__context">
        <h1 className="topbar__title">{title}</h1>
        <span className="topbar__eyebrow" aria-hidden="true" />
        <span className="topbar__subtitle" aria-hidden="true" />
      </div>
      <div className="topbar__actions">
        <div className="topbar__avatar" role="button" aria-label="User profile" tabIndex={0}>
          M
        </div>
      </div>
    </header>
  )
}

export default Topbar
