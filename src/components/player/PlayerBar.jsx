import { usePlayer } from '../../context/PlayerContext.jsx'
import './PlayerBar.css'

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

const getProgress = (duration) => {
  if (!Number.isFinite(duration) || duration <= 0) return '0%'
  const preview = Math.min(duration, 64)
  return `${Math.round((preview / duration) * 100)}%`
}

const PlayerBar = () => {
  const { currentTrack, isPlaying, togglePlay } = usePlayer()

  const hasTrack = Boolean(currentTrack)
  const title    = currentTrack?.title  ?? 'Select a track to play'
  const artist   = currentTrack?.artist ?? ''
  const cover    = currentTrack?.cover  ?? ''
  const duration = formatTime(currentTrack?.duration)
  const progress = getProgress(currentTrack?.duration)

  return (
    <footer className="player-bar" aria-label="Playback controls">
      <div className="player-bar__track">
        {hasTrack ? (
          <img
            className="player-bar__cover"
            src={cover}
            alt={`${title} cover`}
          />
        ) : (
          <div className="player-bar__cover player-bar__cover--empty" aria-hidden="true">
            ♪
          </div>
        )}

        <div className="player-bar__meta">
          <strong className="player-bar__title">{title}</strong>
          {artist && <span className="player-bar__artist">{artist}</span>}
        </div>

        {hasTrack && (
          <button className="player-bar__like" type="button" aria-label="Save to liked songs">
            ♡
          </button>
        )}
      </div>
      <div className="player-bar__center">
        <div className="player-bar__controls" aria-label="Track controls">
          <button className="player-bar__icon-button" type="button" aria-label="Shuffle" disabled>
            ⇄
          </button>
          <button className="player-bar__icon-button" type="button" aria-label="Previous" disabled>
            |◂
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
          <button className="player-bar__icon-button" type="button" aria-label="Next" disabled>
            ▸|
          </button>
          <button className="player-bar__icon-button" type="button" aria-label="Repeat" disabled>
            ↺
          </button>
        </div>
        <div className="player-bar__timeline" aria-hidden="true">
          <span className="player-bar__time">0:00</span>
          <div className="player-bar__progress">
            <div className="player-bar__progress-fill" style={{ width: progress }} />
          </div>
          <span className="player-bar__time">{duration}</span>
        </div>
      </div>
      <div className="player-bar__volume" aria-label="Volume control">
        <span className="player-bar__volume-icon" aria-hidden="true">🔈</span>
        <div className="player-bar__volume-track" aria-hidden="true">
          <div className="player-bar__volume-fill" />
        </div>
      </div>
    </footer>
  )
}

export default PlayerBar
