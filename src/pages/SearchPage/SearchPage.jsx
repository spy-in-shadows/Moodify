import { useState } from 'react'
import ContentRow from '../../components/ui/ContentRow.jsx'
import MediaCard from '../../components/ui/MediaCard.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import { albums } from '../../data/albums.js'
import { artists } from '../../data/artists.js'
import { browseCategories } from '../../data/browse.js'
import { playlists } from '../../data/playlists.js'
import { tracks, tracksById } from '../../data/tracks.js'
import {
  formatDuration,
  formatListeners,
  formatPlayCount,
  formatSubtitle,
} from '../../utils/formatters.js'
import './SearchPage.css'

const normalizeText = (value) =>
  String(value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const includesNeedle = (values, needle) => {
  if (!needle) {
    return true
  }

  return values
    .flat()
    .filter(Boolean)
    .some((value) => normalizeText(value).includes(needle))
}

const trackFields = (track) => [
  track.title,
  track.artist,
  track.album,
  track.categoryTags,
  track.moods,
]

const albumFields = (album) => {
  const relatedTracks = album.trackIds.map((trackId) => tracksById[trackId]).filter(Boolean)

  return [
    album.title,
    album.artist,
    album.description,
    relatedTracks.map((track) => track.title),
    relatedTracks.flatMap((track) => track.categoryTags),
    relatedTracks.flatMap((track) => track.moods),
  ]
}

const artistFields = (artist) => [artist.name, artist.genres]

const playlistFields = (playlist) => {
  const relatedTracks = playlist.trackIds.map((trackId) => tracksById[trackId]).filter(Boolean)

  return [
    playlist.title,
    playlist.description,
    playlist.owner,
    playlist.theme,
    relatedTracks.map((track) => track.title),
    relatedTracks.map((track) => track.artist),
    relatedTracks.flatMap((track) => track.categoryTags),
    relatedTracks.flatMap((track) => track.moods),
  ]
}

const sortedTracks = [...tracks].sort((left, right) => right.popularity - left.popularity)
const sortedAlbums = [...albums].sort((left, right) => right.year - left.year)
const sortedArtists = [...artists].sort(
  (left, right) => right.monthlyListeners - left.monthlyListeners,
)
const sortedPlaylists = [...playlists].sort((left, right) => left.title.localeCompare(right.title))

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('all')

  const activeCategory = browseCategories.find((category) => category.id === selectedCategoryId) ?? null
  const normalizedQuery = normalizeText(query)
  const normalizedCategory = normalizeText(activeCategory?.label)
  const hasActiveFilters = Boolean(normalizedQuery || activeCategory)

  const matchesFilters = (fields) =>
    includesNeedle(fields, normalizedQuery) && includesNeedle(fields, normalizedCategory)

  const filteredTracks = sortedTracks.filter((track) => matchesFilters(trackFields(track)))
  const filteredAlbums = sortedAlbums.filter((album) => matchesFilters(albumFields(album)))
  const filteredArtists = sortedArtists.filter((artist) => matchesFilters(artistFields(artist)))
  const filteredPlaylists = sortedPlaylists.filter((playlist) => matchesFilters(playlistFields(playlist)))

  const sections = [
    {
      id: 'tracks',
      title: hasActiveFilters ? 'Tracks' : 'Trending Tracks',
      subtitle: hasActiveFilters
        ? 'Songs matching your current search and browse filters.'
        : 'Top local tracks to start your search journey.',
      items: hasActiveFilters ? filteredTracks : sortedTracks.slice(0, 6),
      renderCard: (track) => (
        <MediaCard
          key={track.id}
          image={track.cover}
          title={track.title}
          subtitle={formatSubtitle(track.artist, track.album, formatDuration(track.duration))}
          badge={formatPlayCount(track.plays)}
        />
      ),
    },
    {
      id: 'albums',
      title: hasActiveFilters ? 'Albums' : 'Browse Albums',
      subtitle: hasActiveFilters
        ? 'Albums pulled from title, artist, mood, and related track matches.'
        : 'Recent releases and catalog favorites across the mock library.',
      items: hasActiveFilters ? filteredAlbums : sortedAlbums.slice(0, 4),
      renderCard: (album) => (
        <MediaCard
          key={album.id}
          image={album.cover}
          title={album.title}
          subtitle={formatSubtitle(album.artist, album.description)}
          badge={String(album.year)}
        />
      ),
    },
    {
      id: 'artists',
      title: hasActiveFilters ? 'Artists' : 'Popular Artists',
      subtitle: hasActiveFilters
        ? 'Artists matching names, genres, and related browse themes.'
        : 'A quick way to jump into the voices shaping the catalog.',
      items: hasActiveFilters ? filteredArtists : sortedArtists.slice(0, 4),
      renderCard: (artist) => (
        <MediaCard
          key={artist.id}
          image={artist.image}
          title={artist.name}
          subtitle={artist.genres.join(' • ')}
          badge={formatListeners(artist.monthlyListeners)}
          variant="artist"
        />
      ),
    },
    {
      id: 'playlists',
      title: hasActiveFilters ? 'Playlists' : 'Moodify Playlists',
      subtitle: hasActiveFilters
        ? 'Editorial playlists filtered by themes, descriptions, and matching tracks.'
        : 'Ready-made mixes organized by mood, time of day, and momentum.',
      items: hasActiveFilters ? filteredPlaylists : sortedPlaylists.slice(0, 4),
      renderCard: (playlist) => (
        <MediaCard
          key={playlist.id}
          image={playlist.cover}
          title={playlist.title}
          subtitle={formatSubtitle(playlist.owner, playlist.description)}
          badge={playlist.theme}
        />
      ),
    },
  ]

  const totalMatches = sections.reduce((count, section) => count + section.items.length, 0)

  const summaryText = hasActiveFilters
    ? `${totalMatches} result${totalMatches === 1 ? '' : 's'} across tracks, albums, artists, and playlists`
    : 'Browse the catalog by mood, genre, artist, playlist, or album'

  return (
    <main className="search-page">
      <section className="search-page__hero">
        <div className="search-page__hero-copy">
          <span className="search-page__eyebrow">Search</span>
          <h1 className="search-page__title">Find the exact mood, artist, or mix you want.</h1>
          <p className="search-page__description">
            Type anything from a song title to a genre tag, then narrow the catalog with
            browse chips built from the local mock data.
          </p>
        </div>

        <div className="search-page__controls">
          <label className="search-page__field" htmlFor="search-page-query">
            <span className="search-page__field-label">Search the local catalog</span>
            <input
              id="search-page-query"
              className="search-page__input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tracks, albums, artists, or playlists"
            />
          </label>

          <div className="search-page__filters">
            <div className="search-page__chip-row" role="group" aria-label="Browse categories">
              <button
                type="button"
                className={`search-page__chip${selectedCategoryId === 'all' ? ' search-page__chip--active' : ''}`}
                onClick={() => setSelectedCategoryId('all')}
              >
                All
              </button>

              {browseCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`search-page__chip${selectedCategoryId === category.id ? ' search-page__chip--active' : ''}`}
                  onClick={() =>
                    setSelectedCategoryId((currentId) =>
                      currentId === category.id ? 'all' : category.id,
                    )
                  }
                  style={{ '--search-chip-accent': category.color }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="search-page__summary">
              <span className="search-page__summary-text">{summaryText}</span>
              {hasActiveFilters ? (
                <button
                  type="button"
                  className="search-page__clear"
                  onClick={() => {
                    setQuery('')
                    setSelectedCategoryId('all')
                  }}
                >
                  Clear filters
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {hasActiveFilters && totalMatches === 0 ? (
        <section className="search-page__empty">
          <p className="search-page__empty-label">No matches found</p>
          <h2 className="search-page__empty-title">Try a broader search or another browse chip.</h2>
          <p className="search-page__empty-copy">
            Matching checks local titles, artists, albums, playlist themes, moods, and tags.
          </p>
        </section>
      ) : (
        <div className="search-page__results">
          {sections
            .filter((section) => section.items.length > 0)
            .map((section) => (
              <section key={section.id} className="search-page__section">
                <SectionHeader
                  title={section.title}
                  subtitle={`${section.subtitle} ${section.items.length} shown.`}
                />
                <ContentRow columns="four">
                  {section.items.map(section.renderCard)}
                </ContentRow>
              </section>
            ))}
        </div>
      )}
    </main>
  )
}

export default SearchPage
