export const artists = [
  {
    id: 'artist-arijit-singh',
    name: 'Arijit Singh',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    genres: ['bollywood', 'romantic', 'playback'],
    monthlyListeners: 28600000,
  },
  {
    id: 'artist-shreya-ghoshal',
    name: 'Shreya Ghoshal',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    genres: ['bollywood', 'melody', 'playback'],
    monthlyListeners: 19800000,
  },
  {
    id: 'artist-prateek-kuhad',
    name: 'Prateek Kuhad',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    genres: ['indie', 'acoustic', 'singer-songwriter'],
    monthlyListeners: 4200000,
  },
  {
    id: 'artist-the-local-train',
    name: 'The Local Train',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    genres: ['indie rock', 'hindi rock', 'alternative'],
    monthlyListeners: 3100000,
  },
  {
    id: 'artist-badshah',
    name: 'Badshah',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    genres: ['party', 'desi hip-hop', 'pop rap'],
    monthlyListeners: 15400000,
  },
  {
    id: 'artist-ap-dhillon',
    name: 'AP Dhillon',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    genres: ['punjabi', 'urban punjabi', 'desi pop'],
    monthlyListeners: 13200000,
  },
  {
    id: 'artist-guru-randhawa',
    name: 'Guru Randhawa',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    genres: ['punjabi pop', 'party', 'dance'],
    monthlyListeners: 16800000,
  },
  {
    id: 'artist-jasleen-royal',
    name: 'Jasleen Royal',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    genres: ['indie pop', 'bollywood', 'romantic'],
    monthlyListeners: 7600000,
  },
]

export const artistsById = Object.fromEntries(artists.map((artist) => [artist.id, artist]))

export const spotlightArtistIds = [
  'artist-arijit-singh',
  'artist-shreya-ghoshal',
  'artist-ap-dhillon',
  'artist-prateek-kuhad',
]

export default artists
