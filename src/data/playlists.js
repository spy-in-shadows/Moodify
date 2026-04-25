export const playlists = [
  {
    id: 'playlist-bollywood-romance',
    title: 'Bollywood Romance',
    description: 'Soft duets, big feelings, and soundtrack favorites that never really leave your queue.',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Romantic hits',
    trackIds: ['track-kesariya', 'track-ranjha', 'track-tum-kya-mile', 'track-kabira', 'track-ve-kamleya'],
  },
  {
    id: 'playlist-desi-party-hits',
    title: 'Desi Party Hits',
    description: 'Wedding floor staples, club cuts, and Punjabi pop hooks that get the room moving.',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Party starters',
    trackIds: ['track-mercy', 'track-dance-meri-rani', 'track-ishare-tere', 'track-heartless', 'track-summer-high'],
  },
  {
    id: 'playlist-indie-chill',
    title: 'Indie Chill',
    description: 'Hindi indie picks for quiet afternoons, rainy evenings, and headphones-only moods.',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Indie unwind',
    trackIds: ['track-cold-mess', 'track-kasoor', 'track-choo-lo', 'track-aaoge-tum-kabhi'],
  },
  {
    id: 'playlist-late-night-drives',
    title: 'Late Night Drives',
    description: 'Moody Bollywood, easy Punjabi pop, and songs that land best after midnight.',
    cover: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Night drive',
    trackIds: ['track-raataan-lambiyan', 'track-excuses', 'track-summer-high', 'track-choo-lo', 'track-kesariya'],
  },
  {
    id: 'playlist-sad-hours',
    title: 'Sad Hours',
    description: 'For the low-volume nights when heartbreak playlists just make more sense.',
    cover: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Heartbreak',
    trackIds: ['track-ranjha', 'track-kabira', 'track-cold-mess', 'track-excuses', 'track-aaoge-tum-kabhi'],
  },
  {
    id: 'playlist-workout-bollywood',
    title: 'Workout Bollywood',
    description: 'Fast hooks and high-energy desi pop to keep the pace up from warm-up to cooldown.',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Workout',
    trackIds: ['track-dance-meri-rani', 'track-mercy', 'track-heartless', 'track-deva-deva', 'track-ishare-tere'],
  },
  {
    id: 'playlist-punjabi-pop-fix',
    title: 'Punjabi Pop Fix',
    description: 'A compact run of polished Punjabi hits for quick replays and longer drives.',
    cover: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    owner: 'Moodify India',
    theme: 'Punjabi pop',
    trackIds: ['track-summer-high', 'track-excuses', 'track-ishare-tere', 'track-dance-meri-rani'],
  },
  {
    id: 'playlist-library-core',
    title: 'Desi Daily Mix',
    description: 'A saved blend of Bollywood comfort songs, indie favorites, and easy Punjabi replay picks.',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    owner: 'You',
    theme: 'Saved essentials',
    trackIds: ['track-kesariya', 'track-kabira', 'track-choo-lo', 'track-summer-high', 'track-ishare-tere'],
  },
]

export const playlistsById = Object.fromEntries(playlists.map((playlist) => [playlist.id, playlist]))

export const libraryPlaylistIds = [
  'playlist-library-core',
  'playlist-indie-chill',
  'playlist-bollywood-romance',
]

export default playlists
