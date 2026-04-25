import ContentRow from '../../components/ui/ContentRow.jsx'
import MediaCard from '../../components/ui/MediaCard.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import { albumsById, newReleaseAlbumIds } from '../../data/albums.js'
import { artistsById, spotlightArtistIds } from '../../data/artists.js'
import { playlists } from '../../data/playlists.js'
import './HomePage.css'

// Data slices
const quickTiles     = playlists.slice(0, 6)
const featuredSets   = playlists.slice(0, 5)
const trendingAlbums = newReleaseAlbumIds.map((id) => albumsById[id]).filter(Boolean)
const popularArtists = spotlightArtistIds.map((id) => artistsById[id]).filter(Boolean)

const HomePage = () => {
  return (
    <main className="home-page">

      {/* ── Quick-access grid ── */}
      <section className="home-page__quick" aria-label="Quick picks">
        {quickTiles.map((playlist) => (
          <div key={playlist.id} className="home-page__quick-tile">
            <div className="home-page__quick-thumb-wrap">
              <img
                className="home-page__quick-thumb"
                src={playlist.cover}
                alt={playlist.title}
                loading="lazy"
              />
            </div>
            <span className="home-page__quick-label">{playlist.title}</span>
          </div>
        ))}
      </section>

      {/* ── Featured Playlists ── */}
      <section className="home-page__section">
        <SectionHeader
          title="Featured for You"
          actionLabel="Show all"
          onAction={() => {}}
        />
        <ContentRow columns="five">
          {featuredSets.map((playlist) => (
            <MediaCard
              key={playlist.id}
              image={playlist.cover}
              title={playlist.title}
              subtitle={playlist.description}
            />
          ))}
        </ContentRow>
      </section>

      {/* ── New Releases ── */}
      <section className="home-page__section">
        <SectionHeader
          title="New Releases"
          actionLabel="Show all"
          onAction={() => {}}
        />
        <ContentRow columns="four">
          {trendingAlbums.map((album) => (
            <MediaCard
              key={album.id}
              image={album.cover}
              title={album.title}
              subtitle={album.artist}
              badge={String(album.year)}
            />
          ))}
        </ContentRow>
      </section>

      {/* ── Artists to Follow ── */}
      <section className="home-page__section">
        <SectionHeader
          title="Artists to Follow"
          actionLabel="Show all"
          onAction={() => {}}
        />
        <ContentRow columns="four">
          {popularArtists.map((artist) => (
            <MediaCard
              key={artist.id}
              image={artist.image}
              title={artist.name}
              subtitle={`${(artist.monthlyListeners / 1_000_000).toFixed(1)}M monthly listeners`}
              variant="artist"
            />
          ))}
        </ContentRow>
      </section>

    </main>
  )
}

export default HomePage
