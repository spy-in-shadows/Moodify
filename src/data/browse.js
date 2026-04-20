export const browseCategories = [
  { id: 'browse-pop', label: 'Pop', color: '#ff6b6b' },
  { id: 'browse-indie', label: 'Indie', color: '#ff922b' },
  { id: 'browse-focus', label: 'Focus', color: '#4dabf7' },
  { id: 'browse-chill', label: 'Chill', color: '#63e6be' },
  { id: 'browse-workout', label: 'Workout', color: '#f06595' },
  { id: 'browse-party', label: 'Party', color: '#cc5de8' },
  { id: 'browse-romance', label: 'Romance', color: '#e64980' },
  { id: 'browse-road-trip', label: 'Road Trip', color: '#fab005' },
  { id: 'browse-summer', label: 'Summer', color: '#20c997' },
  { id: 'browse-night-drive', label: 'Night Drive', color: '#5c7cfa' },
]

export const browseCategoriesById = Object.fromEntries(
  browseCategories.map((category) => [category.id, category]),
)

export default browseCategories
