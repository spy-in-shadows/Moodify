export const browseCategories = [
  { id: 'browse-bollywood', label: 'Bollywood', color: '#ff6b6b' },
  { id: 'browse-romantic', label: 'Romantic', color: '#e64980' },
  { id: 'browse-party', label: 'Party', color: '#cc5de8' },
  { id: 'browse-sad', label: 'Sad', color: '#5c7cfa' },
  { id: 'browse-indie', label: 'Indie', color: '#ff922b' },
  { id: 'browse-workout', label: 'Workout', color: '#f06595' },
  { id: 'browse-punjabi', label: 'Punjabi', color: '#20c997' },
  { id: 'browse-chill', label: 'Chill', color: '#63e6be' },
  { id: 'browse-road-trip', label: 'Road Trip', color: '#fab005' },
  { id: 'browse-trending-india', label: 'Trending in India', color: '#4dabf7' },
]

export const browseCategoriesById = Object.fromEntries(
  browseCategories.map((category) => [category.id, category]),
)

export default browseCategories
