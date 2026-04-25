import { NavLink } from 'react-router-dom'
import { playlists } from '../../data/playlists.js'
import './Sidebar.css'

const navItems = [
  { to: '/', label: 'Home', end: true, icon: '⌂' },
  { to: '/search', label: 'Search', icon: '⊕' },
  { to: '/library', label: 'Your Library', icon: '▤' },
]

const libraryItems = [
  { id: 'liked', name: 'Liked Songs', meta: 'Playlist • You', thumb: null, isLiked: true },
  ...playlists.slice(0, 6).map((p) => ({
    id: p.id,
    name: p.title,
    meta: `Playlist • ${p.owner}`,
    thumb: p.cover,
    isLiked: false,
  })),
]

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      {/* Brand */}
      <div className="sidebar__brand">
        <div className="sidebar__brand-logo" aria-hidden="true">♪</div>
        <span className="sidebar__brand-name">Moodify</span>
      </div>

      {/* Main nav links */}
      <nav className="sidebar__nav" aria-label="Main">
        {navItems.map(({ to, label, end, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            <span className="sidebar__link-icon" aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Library section */}
      <section className="sidebar__library" aria-label="Your Library">
        <div className="sidebar__library-header">
          <span className="sidebar__library-title">
            <span className="sidebar__library-icon" aria-hidden="true">▤</span>
            Your Library
          </span>
          <button className="sidebar__library-add" type="button" aria-label="Create playlist">
            +
          </button>
        </div>

        <ul className="sidebar__playlists" role="list">
          {libraryItems.map((item) => (
            <li key={item.id}>
              <div className="sidebar__playlist-item">
                <div className={`sidebar__playlist-thumb ${item.isLiked ? 'sidebar__playlist-thumb--liked' : ''}`}>
                  {item.isLiked ? (
                    <span aria-hidden="true">♥</span>
                  ) : (
                    <img src={item.thumb} alt={item.name} loading="lazy" />
                  )}
                </div>
                <div className="sidebar__playlist-info">
                  <div className="sidebar__playlist-name">{item.name}</div>
                  <div className="sidebar__playlist-meta">{item.meta}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
