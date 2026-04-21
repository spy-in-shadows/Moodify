import { useState } from 'react'
import { albums } from '../../data/albums.js'
import { artists } from '../../data/artists.js'
import { libraryPlaylistIds, playlists } from '../../data/playlists.js'
import { tracks, tracksById } from '../../data/tracks.js'
import {
  formatDuration,
  formatListeners,
  formatPlayCount,
  formatSubtitle,
} from '../../utils/formatters.js'
import './LibraryPage.css'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'playlists', label: 'Playlists' },
  { id: 'albums', label: 'Albums' },
  { id: 'artists', label: 'Artists' },
]

const libraryPlaylists = libraryPlaylistIds
  .map((playlistId) => playlists.find((playlist) => playlist.id === playlistId))
  .filter(Boolean)

const savedAlbumIds = [...new Set(libraryPlaylists.flatMap((playlist) => playlist.trackIds))]
  .map((trackId) => tracksById[trackId]?.albumId)
  .filter(Boolean)

const savedAlbums = albums.filter((album) => savedAlbumIds.includes(album.id)).slice(0, 4)
const savedArtists = artists
  .filter((artist) => savedAlbums.some((album) => album.artistId === artist.id))
  .slice(0, 4)

const likedSongs = tracks
  .filter((track) => track.popularity >= 80)
  .sort((left, right) => right.popularity - left.popularity)
  .slice(0, 8)

const recentListens = [...tracks]
  .sort((left, right) => right.plays - left.plays)
  .slice(0, 6)

const filterConfig = {
  all: {
    title: 'Everything you keep close',
    subtitle: 'Jump between saved playlists, standout albums, and favorite artists.',
  },
  playlists: {
    title: 'Your saved playlists',
    subtitle: 'Mixes built for routines, moods, and repeat listens.',
  },
  albums: {
    title: 'Albums in your rotation',
    subtitle: 'Full projects you keep coming back to when you want a complete vibe.',
  },
  artists: {
    title: 'Artists you revisit',
    subtitle: 'Creators behind the songs that define your library lately.',
  },
}

const getPlaylistMeta = (playlist) => {
  const playlistTracks = playlist.trackIds.map((trackId) => tracksById[trackId]).filter(Boolean)
  const totalDuration = playlistTracks.reduce((sum, track) => sum + track.duration, 0)

  return {
    tracksLabel: `${playlistTracks.length} songs`,
    runtimeLabel: `${Math.round(totalDuration / 60)} min`,
  }
}

const PlaylistCard = ({ playlist }) => {
  const { tracksLabel, runtimeLabel } = getPlaylistMeta(playlist)

  return (
    <article className="library-page__media-card library-page__media-card--playlist">
      <img className="library-page__media-art" src={playlist.cover} alt={`${playlist.title} cover art`} />
      <div className="library-page__media-copy">
        <span className="library-page__media-kicker">Playlist</span>
        <h3>{playlist.title}</h3>
        <p>{playlist.description}</p>
        <div className="library-page__meta-row">
          <span>{formatSubtitle(playlist.owner, playlist.theme)}</span>
          <span>{formatSubtitle(tracksLabel, runtimeLabel)}</span>
        </div>
      </div>
    </article>
  )
}

const AlbumCard = ({ album }) => {
  const trackCount = album.trackIds.length
  const totalDuration = album.trackIds.reduce((sum, trackId) => sum + (tracksById[trackId]?.duration ?? 0), 0)

  return (
    <article className="library-page__media-card">
      <img className="library-page__media-art" src={album.cover} alt={`${album.title} cover art`} />
      <div className="library-page__media-copy">
        <span className="library-page__media-kicker">Album</span>
        <h3>{album.title}</h3>
        <p>{album.description}</p>
        <div className="library-page__meta-row">
          <span>{formatSubtitle(album.artist, album.year)}</span>
          <span>{formatSubtitle(`${trackCount} tracks`, `${Math.round(totalDuration / 60)} min`)}</span>
        </div>
      </div>
    </article>
  )
}

const ArtistCard = ({ artist }) => (
  <article className="library-page__media-card library-page__media-card--artist">
    <img className="library-page__media-art library-page__media-art--round" src={artist.image} alt={artist.name} />
    <div className="library-page__media-copy">
      <span className="library-page__media-kicker">Artist</span>
      <h3>{artist.name}</h3>
      <p>{artist.genres.join(' • ')}</p>
      <div className="library-page__meta-row">
        <span>{formatListeners(artist.monthlyListeners)}</span>
      </div>
    </div>
  </article>
)

const RecentTrackRow = ({ track, index }) => (
  <article className="library-page__recent-row">
    <div className="library-page__recent-rank">{String(index + 1).padStart(2, '0')}</div>
    <img className="library-page__recent-cover" src={track.cover} alt={`${track.title} cover art`} />
    <div className="library-page__recent-copy">
      <h3>{track.title}</h3>
      <p>{formatSubtitle(track.artist, track.album, track.moods[0])}</p>
    </div>
    <div className="library-page__recent-stats">
      <span>{formatPlayCount(track.plays)}</span>
      <span>{formatDuration(track.duration)}</span>
    </div>
  </article>
)

const LibraryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleCollections = {
    playlists: activeFilter === 'all' || activeFilter === 'playlists',
    albums: activeFilter === 'all' || activeFilter === 'albums',
    artists: activeFilter === 'all' || activeFilter === 'artists',
  }

  const likedSongsDuration = likedSongs.reduce((sum, track) => sum + track.duration, 0)
  const likedSongsGenres = [...new Set(likedSongs.flatMap((track) => track.categoryTags))].slice(0, 3)
  const filterDetails = filterConfig[activeFilter]

  return (
    <main className="library-page u-container u-section">
      <section className="library-page__hero">
        <div className="library-page__hero-copy">
          <span className="library-page__eyebrow">Your Library</span>
          <h1>Built around the songs you actually return to.</h1>
          <p>
            Keep your saved essentials close, skim what you have been spinning lately, and switch
            between playlists, albums, and artists without leaving the page.
          </p>
          <div className="library-page__hero-actions" role="tablist" aria-label="Library filters">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`library-page__filter-pill ${
                  activeFilter === filter.id ? 'library-page__filter-pill--active' : ''
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <aside className="library-page__liked-card u-card">
          <div className="library-page__liked-badge">Liked Songs</div>
          <h2>{likedSongs.length} favorites lined up for replay</h2>
          <p>
            {formatSubtitle(
              `${Math.round(likedSongsDuration / 60)} min`,
              likedSongs[0]?.artist,
              likedSongs[1]?.artist,
            )}
          </p>
          <div className="library-page__liked-stats">
            <div>
              <strong>{likedSongs.length}</strong>
              <span>Saved tracks</span>
            </div>
            <div>
              <strong>{formatPlayCount(likedSongs.reduce((sum, track) => sum + track.plays, 0))}</strong>
              <span>Total plays</span>
            </div>
          </div>
          <div className="library-page__liked-tags">
            {likedSongsGenres.map((genre) => (
              <span key={genre}>{genre.replace('-', ' ')}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="library-page__collection-intro u-row-between">
        <div>
          <span className="library-page__section-kicker">Saved content</span>
          <h2>{filterDetails.title}</h2>
          <p>{filterDetails.subtitle}</p>
        </div>
        <div className="library-page__summary-chip">
          <strong>{libraryPlaylists.length + savedAlbums.length + savedArtists.length}</strong>
          <span>items showcased</span>
        </div>
      </section>

      <div className="library-page__collection-stack">
        {visibleCollections.playlists ? (
          <section className="library-page__section-block">
            <div className="library-page__section-heading">
              <div>
                <span className="library-page__section-kicker">Playlists</span>
                <h2>Your playlists</h2>
              </div>
              <p>Personal mixes for focus sessions, road trips, and low-key nights.</p>
            </div>
            <div className="library-page__media-grid">
              {libraryPlaylists.map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          </section>
        ) : null}

        {visibleCollections.albums ? (
          <section className="library-page__section-block">
            <div className="library-page__section-heading">
              <div>
                <span className="library-page__section-kicker">Albums</span>
                <h2>Albums worth a full listen</h2>
              </div>
              <p>Saved releases that anchor the sound of your library.</p>
            </div>
            <div className="library-page__media-grid">
              {savedAlbums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </section>
        ) : null}

        {visibleCollections.artists ? (
          <section className="library-page__section-block">
            <div className="library-page__section-heading">
              <div>
                <span className="library-page__section-kicker">Artists</span>
                <h2>Artists in your orbit</h2>
              </div>
              <p>People behind the records and playlists you have kept around.</p>
            </div>
            <div className="library-page__media-grid">
              {savedArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <section className="library-page__recents u-card">
        <div className="library-page__section-heading">
          <div>
            <span className="library-page__section-kicker">Recent listens</span>
            <h2>Recently played</h2>
          </div>
          <p>
            {activeFilter === 'all'
              ? 'A quick queue of the tracks getting the most replay in your library.'
              : `Recent listens are still available while browsing ${activeFilter}.`}
          </p>
        </div>
        <div className="library-page__recent-list">
          {recentListens.map((track, index) => (
            <RecentTrackRow key={track.id} track={track} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default LibraryPage
