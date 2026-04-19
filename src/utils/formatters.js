export const formatDuration = (totalSeconds = 0) => {
  const safeSeconds = Number.isFinite(totalSeconds) ? Math.max(0, Math.floor(totalSeconds)) : 0
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60

  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export const formatSubtitle = (...parts) =>
  parts
    .flat()
    .filter((part) => part !== undefined && part !== null && String(part).trim() !== '')
    .join(' • ')

export const formatListeners = (count = 0) => {
  const safeCount = Number.isFinite(count) ? Math.max(0, count) : 0

  if (safeCount >= 1000000) {
    return `${(safeCount / 1000000).toFixed(safeCount >= 10000000 ? 0 : 1)}M monthly listeners`
  }

  if (safeCount >= 1000) {
    return `${Math.round(safeCount / 1000)}K monthly listeners`
  }

  return `${safeCount} monthly listeners`
}

export const formatPlayCount = (count = 0) => {
  const safeCount = Number.isFinite(count) ? Math.max(0, count) : 0

  if (safeCount >= 1000000) {
    return `${(safeCount / 1000000).toFixed(safeCount >= 10000000 ? 0 : 1)}M plays`
  }

  if (safeCount >= 1000) {
    return `${Math.round(safeCount / 1000)}K plays`
  }

  return `${safeCount} plays`
}

export default {
  formatDuration,
  formatSubtitle,
  formatListeners,
  formatPlayCount,
}
