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

const countCategoryMatches = (category) => {
  const needle = normalizeText(category.label)

  return [
    ...tracks.map(trackFields),
    ...albums.map(albumFields),
    ...artists.map(artistFields),
    ...playlists.map(playlistFields),
  ].filter((fields) => includesNeedle(fields, needle)).length
}

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('all')

  const activeCategory = browseCategories.find((category) => category.id === selectedCategoryId) ?? null
  const normalizedQuery = normalizeText(query)
  const normalizedCategory = normalizeText(activeCategory?.label)
  const hasQuery = Boolean(normalizedQuery)
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
      title: hasActiveFilters ? 'Tracks' : 'Trending in India',
      subtitle: hasActiveFilters
        ? 'Songs matching your current search and browse filters.'
        : 'A quick mix of Bollywood, Punjabi pop, and indie songs people keep replaying.',
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
      title: hasActiveFilters ? 'Albums' : 'Popular Soundtracks & Albums',
      subtitle: hasActiveFilters
        ? 'Albums pulled from title, artist, mood, and related track matches.'
        : 'Soundtracks, indie records, and desi pop albums from the local catalog.',
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
      title: hasActiveFilters ? 'Artists' : 'Popular Indian Artists',
      subtitle: hasActiveFilters
        ? 'Artists matching names, genres, and related browse themes.'
        : 'A quick way to jump into the voices shaping this Indian music catalog.',
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
      title: hasActiveFilters ? 'Playlists' : 'Desi Playlists',
      subtitle: hasActiveFilters
        ? 'Editorial playlists filtered by themes, descriptions, and matching tracks.'
        : 'Ready-made mixes for romance, heartbreak, gym sessions, and late drives.',
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
    : 'Browse by mood, artist, soundtrack, playlist, or genre from the Indian catalog'

  const noResultsTitle =
    hasQuery && activeCategory
      ? `No matches for "${query.trim()}" in ${activeCategory.label}`
      : hasQuery
        ? `No matches for "${query.trim()}"`
        : `No ${activeCategory?.label ?? ''} matches yet`
  const searchSummaryId = 'search-page-summary'
  const resultsHeadingId = 'search-page-results-heading'

  return (
    <main className="search-page">
      <section className="search-page__hero" aria-labelledby="search-page-title">
        <div className="search-page__hero-copy">
          <span className="search-page__eyebrow">Search</span>
          <h1 className="search-page__title" id="search-page-title">
            Find the exact mood, artist, or mix you want.
          </h1>
          <p className="search-page__description">
            Search Bollywood songs, Punjabi pop, indie favorites, and mood-based playlists
            from the local catalog.
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
              placeholder="Search songs, artists, albums, or playlists"
              aria-describedby={searchSummaryId}
              autoComplete="off"
              spellCheck="false"
            />
          </label>

          <div className="search-page__filters">
            <div className="search-page__chip-row" role="group" aria-label="Browse categories">
              <button
                type="button"
                className={`search-page__chip${selectedCategoryId === 'all' ? ' search-page__chip--active' : ''}`}
                onClick={() => setSelectedCategoryId('all')}
                aria-pressed={selectedCategoryId === 'all'}
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
                  aria-pressed={selectedCategoryId === category.id}
                  style={{ '--search-chip-accent': category.color }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="search-page__summary">
              <p className="search-page__summary-text" id={searchSummaryId} aria-live="polite">
                {summaryText}
              </p>
              {hasActiveFilters ? (
                <button
                  type="button"
                  className="search-page__clear"
                  aria-label="Clear the search query and category filters"
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
          <h2 className="search-page__empty-title">{noResultsTitle}</h2>
          <p className="search-page__empty-copy">
            Try a shorter phrase, choose a different category, or clear filters to browse
            every track, album, artist, and playlist in the local catalog.
          </p>
          <button
            type="button"
            className="search-page__empty-action"
            onClick={() => {
              setQuery('')
              setSelectedCategoryId('all')
            }}
          >
            Reset search
          </button>
        </section>
      ) : (
        <>
          {!hasQuery ? (
            <section className="search-page__browse">
              <SectionHeader
              title="Browse all"
              subtitle="Start with a mood or activity, then refine with the search bar above."
            />
              <div className="search-page__browse-grid">
                {browseCategories.map((category) => {
                  const matchCount = countCategoryMatches(category)

                  return (
                  <button
                    key={category.id}
                    type="button"
                    className={`search-page__browse-card${selectedCategoryId === category.id ? ' search-page__browse-card--active' : ''}`}
                    onClick={() =>
                      setSelectedCategoryId((currentId) =>
                        currentId === category.id ? 'all' : category.id,
                      )
                    }
                    aria-pressed={selectedCategoryId === category.id}
                    aria-label={`${category.label}, ${matchCount} local matches`}
                    style={{ '--search-card-accent': category.color }}
                  >
                    <span className="search-page__browse-title">{category.label}</span>
                    <span className="search-page__browse-meta">
                      {matchCount} local matches
                    </span>
                  </button>
                  )
                })}
              </div>
            </section>
          ) : null}

          <div
            className="search-page__results"
            aria-labelledby={resultsHeadingId}
          >
            <h2 className="search-page__results-heading" id={resultsHeadingId}>
              Search results
            </h2>
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
        </>
      )}
    </main>
  )
}

export default SearchPage
