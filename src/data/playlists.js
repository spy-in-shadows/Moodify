export const playlists = [
  {
    id: 'playlist-neon-commute',
    title: 'Neon Commute',
    description: 'High-gloss songs for train rides, traffic lights, and headphone-heavy evenings.',
    cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Night drive pop',
    trackIds: ['track-midnight-lane', 'track-neon-hearts', 'track-lobby-lights', 'track-glass-signal'],
  },
  {
    id: 'playlist-sunrise-reset',
    title: 'Sunrise Reset',
    description: 'Warm, clear tracks that make slow mornings feel a little more open.',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Morning uplift',
    trackIds: ['track-sunline', 'track-silver-notes', 'track-open-skies', 'track-halo-season'],
  },
  {
    id: 'playlist-soft-focus',
    title: 'Soft Focus',
    description: 'Gentle textures and low-stakes rhythm for reading, sketching, or late coffee.',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Chill dream-pop',
    trackIds: ['track-parachute-club', 'track-halo-season', 'track-after-rain', 'track-blue-postcards'],
  },
  {
    id: 'playlist-open-road',
    title: 'Open Road Stories',
    description: 'Big choruses and steady movement for highways, maps, and spontaneous detours.',
    cover: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Road trip anthems',
    trackIds: ['track-open-skies', 'track-free-fall-fiction', 'track-mile-marker', 'track-satellite-summer'],
  },
  {
    id: 'playlist-after-hours',
    title: 'After Hours Arcade',
    description: 'Playful electronic pop with a polished pulse and a little midnight energy.',
    cover: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Late-night electronic',
    trackIds: ['track-pulse-check', 'track-chrome-kiss', 'track-star-map', 'track-midnight-lane'],
  },
  {
    id: 'playlist-stargaze-duo',
    title: 'Stargaze for Two',
    description: 'Slow-burning electronic and romantic atmospheres for quiet nights in.',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'Spacey date night',
    trackIds: ['track-zero-gravity-slowdance', 'track-star-map', 'track-neon-hearts', 'track-blue-postcards'],
  },
  {
    id: 'playlist-weekend-loop',
    title: 'Weekend Loop',
    description: 'An easy mix of replayable favorites for errands, brunch, and city wandering.',
    cover: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify',
    theme: 'All-day replay',
    trackIds: ['track-sunline', 'track-chrome-kiss', 'track-pulse-check', 'track-silver-notes'],
  },
  {
    id: 'playlist-library-core',
    title: 'Library Core',
    description: 'A balanced starter collection that touches every major corner of the catalog.',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    owner: 'You',
    theme: 'Saved essentials',
    trackIds: ['track-midnight-lane', 'track-sunline', 'track-free-fall-fiction', 'track-star-map', 'track-silver-notes'],
  },
]

export const playlistsById = Object.fromEntries(playlists.map((playlist) => [playlist.id, playlist]))

export const libraryPlaylistIds = ['playlist-library-core', 'playlist-soft-focus', 'playlist-open-road']

export default playlists
