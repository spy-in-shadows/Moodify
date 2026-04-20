import { usePlayer } from '../../context/PlayerContext.jsx'
import './PlayerBar.css'

const formatDuration = (durationInSeconds) => {
  if (!Number.isFinite(durationInSeconds) || durationInSeconds <= 0) {
    return '--:--'
  }

  const minutes = Math.floor(durationInSeconds / 60)
  const seconds = durationInSeconds % 60

  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

const getProgressWidth = (durationInSeconds) => {
  if (!Number.isFinite(durationInSeconds) || durationInSeconds <= 0) {
    return '0%'
  }

  const previewProgress = Math.min(durationInSeconds, 64)
  return `${Math.round((previewProgress / durationInSeconds) * 100)}%`
}

const PlayerBar = () => {
  const { currentTrack, isPlaying, togglePlay } = usePlayer()

  const hasTrack = Boolean(currentTrack)
  const title = currentTrack?.title ?? 'Select a track to get started'
  const artist = currentTrack?.artist ?? 'Your playback controls will appear here'
  const cover = currentTrack?.cover ?? ''
  const duration = formatDuration(currentTrack?.duration)
  const progressWidth = getProgressWidth(currentTrack?.duration)

  return (
    <footer className="player-bar" aria-label="Playback controls">
      <div className="player-bar__track">
        {hasTrack ? (
          <img
            className="player-bar__cover"
            src={cover}
            alt={`${title} cover art`}
          />
        ) : (
          <div className="player-bar__cover player-bar__cover--empty" aria-hidden="true">
            ♪
          </div>
        )}
        <div className="player-bar__meta">
          <strong className="player-bar__title">{title}</strong>
          <span className="player-bar__artist">{artist}</span>
        </div>
      </div>

      <div className="player-bar__center">
        <div className="player-bar__controls" aria-label="Track controls">
          <button className="player-bar__icon-button" type="button" aria-label="Previous track">
            ‹‹
          </button>
          <button
            className="player-bar__play-button"
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            disabled={!hasTrack}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button className="player-bar__icon-button" type="button" aria-label="Next track">
            ››
          </button>
        </div>

        <div className="player-bar__timeline" aria-hidden="true">
          <span className="player-bar__time">0:00</span>
          <div className="player-bar__progress">
            <div className="player-bar__progress-fill" style={{ width: progressWidth }} />
          </div>
          <span className="player-bar__time">{duration}</span>
        </div>
      </div>

      <div className="player-bar__volume" aria-label="Volume control">
        <span className="player-bar__volume-icon" aria-hidden="true">
          🔊
        </span>
        <div className="player-bar__volume-track" aria-hidden="true">
          <div className="player-bar__volume-fill" />
        </div>
      </div>
    </footer>
  )
}

export default PlayerBar
