import ContentRow from '../../components/ui/ContentRow.jsx'
import MediaCard from '../../components/ui/MediaCard.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import { albums, albumsById, newReleaseAlbumIds } from '../../data/albums.js'
import { artists, artistsById, spotlightArtistIds } from '../../data/artists.js'
import { playlists } from '../../data/playlists.js'
import './HomePage.css'

const featuredPlaylists = playlists.slice(0, 4)
const trendingAlbums = newReleaseAlbumIds.map((albumId) => albumsById[albumId]).filter(Boolean)
const popularArtists = spotlightArtistIds.map((artistId) => artistsById[artistId]).filter(Boolean)

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <div className="home-page__hero-copy">
          <span className="home-page__eyebrow">Moodify Home</span>
          <h1 className="home-page__title">Soundtrack every part of your day.</h1>
          <p className="home-page__description">
            Jump back into handpicked playlists, fresh album drops, and artists that
            keep the energy moving from slow mornings to late-night replays.
          </p>
        </div>

        <div className="home-page__hero-panel">
          <p className="home-page__hero-label">In your mix today</p>
          <div className="home-page__hero-stats" aria-label="Library highlights">
            <article className="home-page__stat">
              <span className="home-page__stat-value">{playlists.length}</span>
              <span className="home-page__stat-label">Playlists</span>
            </article>
            <article className="home-page__stat">
              <span className="home-page__stat-value">{albums.length}</span>
              <span className="home-page__stat-label">Albums</span>
            </article>
            <article className="home-page__stat">
              <span className="home-page__stat-value">{artists.length}</span>
              <span className="home-page__stat-label">Artists</span>
            </article>
          </div>
        </div>
      </section>

      <section className="home-page__section">
        <SectionHeader
          title="Featured Playlists"
          subtitle="Curated sets for daily momentum, quiet focus, and replay-worthy nights."
        />
        <ContentRow columns="four">
          {featuredPlaylists.map((playlist) => (
            <MediaCard
              key={playlist.id}
              image={playlist.cover}
              title={playlist.title}
              subtitle={playlist.description}
              badge={playlist.theme}
            />
          ))}
        </ContentRow>
      </section>

      <section className="home-page__section">
        <SectionHeader
          title="Trending Albums"
          subtitle="Fresh releases with bold artwork, polished moods, and standout hooks."
        />
        <ContentRow columns="four">
          {trendingAlbums.map((album) => (
            <MediaCard
              key={album.id}
              image={album.cover}
              title={album.title}
              subtitle={`${album.artist} • ${album.description}`}
              badge={String(album.year)}
            />
          ))}
        </ContentRow>
      </section>

      <section className="home-page__section">
        <SectionHeader
          title="Popular Artists"
          subtitle="A rotating lineup of artists shaping the tone of the week."
        />
        <ContentRow columns="four">
          {popularArtists.map((artist) => (
            <MediaCard
              key={artist.id}
              image={artist.image}
              title={artist.name}
              subtitle={artist.genres.join(' • ')}
              badge={`${(artist.monthlyListeners / 1000000).toFixed(1)}M listeners`}
              variant="artist"
            />
          ))}
        </ContentRow>
      </section>
    </main>
  )
}

export default HomePage
