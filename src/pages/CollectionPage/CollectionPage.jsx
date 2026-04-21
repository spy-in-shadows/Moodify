import { useParams } from 'react-router-dom'
import { albumsById } from '../../data/albums.js'
import { playlistsById } from '../../data/playlists.js'
import { tracksById } from '../../data/tracks.js'
import { formatDuration, formatPlayCount, formatSubtitle } from '../../utils/formatters.js'
import './CollectionPage.css'

const buildCollection = (type, id) => {
  if (type === 'playlist') {
    const playlist = playlistsById[id]

    if (!playlist) {
      return null
    }

    return {
      kind: 'Playlist',
      title: playlist.title,
      description: playlist.description,
      image: playlist.cover,
      meta: formatSubtitle(`By ${playlist.owner}`, playlist.theme),
      chips: [`${playlist.trackIds.length} tracks`, playlist.owner],
      trackIds: playlist.trackIds,
      contextLabel: 'Album',
      trackContext: (track) => track.album,
    }
  }

  if (type === 'album') {
    const album = albumsById[id]

    if (!album) {
      return null
    }

    return {
      kind: 'Album',
      title: album.title,
      description: album.description,
      image: album.cover,
      meta: formatSubtitle(album.artist, album.year),
      chips: [`${album.trackIds.length} tracks`, album.artist, String(album.year)],
      trackIds: album.trackIds,
      contextLabel: 'Artist',
      trackContext: (track) => track.artist,
    }
  }

  return null
}

const CollectionPage = () => {
  const { type, id } = useParams()
  const collection = buildCollection(type, id)

  if (!collection) {
    return (
      <main className="collection-page">
        <section className="collection-page__empty">
          <p className="collection-page__type">Collection</p>
          <h2 className="collection-page__empty-title">Nothing to show here yet.</h2>
          <p className="collection-page__empty-text">
            We couldn&apos;t find a local {type ?? 'collection'} with the id{' '}
            <strong>{id ?? 'unknown'}</strong>. Try an album or playlist route from the
            existing mock catalog.
          </p>
        </section>
      </main>
    )
  }

  const tracks = collection.trackIds.map((trackId) => tracksById[trackId]).filter(Boolean)
  const totalDuration = tracks.reduce((sum, track) => sum + (track.duration ?? 0), 0)

  return (
    <main className="collection-page">
      <section className="collection-page__hero">
        <div className="collection-page__cover-wrap">
          <img className="collection-page__cover" src={collection.image} alt={collection.title} />
        </div>

        <div className="collection-page__body">
          <p className="collection-page__type">{collection.kind}</p>
          <h2 className="collection-page__title">{collection.title}</h2>
          <p className="collection-page__description">{collection.description}</p>
          <p className="collection-page__meta">
            {formatSubtitle(collection.meta, formatDuration(totalDuration), `${tracks.length} songs`)}
          </p>

          <div className="collection-page__chips" aria-label="Collection metadata">
            {collection.chips.map((chip) => (
              <span key={chip} className="collection-page__chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-page__tracks" aria-labelledby="collection-track-list">
        <h3 id="collection-track-list" className="collection-page__table-title">
          Track list
        </h3>

        <div className="collection-page__table-header" aria-hidden="true">
          <span>#</span>
          <span>Title</span>
          <span className="collection-page__table-context">{collection.contextLabel}</span>
          <span className="collection-page__table-plays">Plays</span>
          <span>Time</span>
        </div>

        <div className="collection-page__track-list">
          {tracks.map((track, index) => (
            <article key={track.id} className="collection-page__track">
              <span className="collection-page__track-index">{index + 1}</span>

              <div className="collection-page__track-main">
                <p className="collection-page__track-title">{track.title}</p>
                <p className="collection-page__track-subtitle">
                  {formatSubtitle(track.artist, track.album)}
                </p>
              </div>

              <div className="collection-page__track-context">
                <p className="collection-page__track-context-title">
                  {collection.trackContext(track)}
                </p>
              </div>

              <span className="collection-page__track-plays">
                {formatPlayCount(track.plays)}
              </span>

              <span className="collection-page__track-duration">
                {formatDuration(track.duration)}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CollectionPage
