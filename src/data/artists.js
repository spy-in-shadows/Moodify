export const artists = [
  {
    id: 'artist-luna-harbor',
    name: 'Luna Harbor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    genres: ['synth-pop', 'night pop', 'indie electronic'],
    monthlyListeners: 12600000,
  },
  {
    id: 'artist-neon-district',
    name: 'Neon District',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    genres: ['alt-pop', 'electro-pop', 'indie dance'],
    monthlyListeners: 8400000,
  },
  {
    id: 'artist-sol-kite',
    name: 'Sol Kite',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    genres: ['acoustic pop', 'indie folk', 'sunshine pop'],
    monthlyListeners: 7900000,
  },
  {
    id: 'artist-iris-afterglow',
    name: 'Iris Afterglow',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    genres: ['dream-pop', 'ambient pop', 'bedroom pop'],
    monthlyListeners: 6200000,
  },
  {
    id: 'artist-atlas-run',
    name: 'Atlas Run',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    genres: ['indie rock', 'alt-rock', 'road-trip rock'],
    monthlyListeners: 7100000,
  },
  {
    id: 'artist-velvet-circuit',
    name: 'Velvet Circuit',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    genres: ['dance-pop', 'electro-pop', 'nu-disco'],
    monthlyListeners: 9800000,
  },
  {
    id: 'artist-nova-choir',
    name: 'Nova Choir',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    genres: ['space pop', 'cinematic electronic', 'dreamwave'],
    monthlyListeners: 8950000,
  },
  {
    id: 'artist-paper-moons',
    name: 'Paper Moons',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    genres: ['indie pop', 'coastal folk', 'soft rock'],
    monthlyListeners: 5400000,
  },
]

export const artistsById = Object.fromEntries(artists.map((artist) => [artist.id, artist]))

export const spotlightArtistIds = [
  'artist-luna-harbor',
  'artist-velvet-circuit',
  'artist-nova-choir',
  'artist-sol-kite',
]

export default artists
