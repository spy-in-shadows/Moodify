import { createElement } from 'react'
import { usePlayer } from '../../context/PlayerContext.jsx'
import './MediaCard.css'

const MediaCard = ({
  image,
  title,
  subtitle,
  badge,
  meta,
  track,           // optional track object to pass to player on click
  onClick,
  variant = 'default',
  className = '',
  titleAs: TitleTag = 'h3',
  ariaLabel,
  ...restProps
}) => {
  const { playTrack } = usePlayer()

  const handleClick = () => {
    if (track) {
      playTrack(track)
    }
    if (onClick) {
      onClick()
    }
  }

  const isInteractive = Boolean(onClick || track)
  const Wrapper = isInteractive ? 'button' : 'article'
  const interactiveProps = isInteractive
    ? { type: 'button', onClick: handleClick }
    : {}

  const cardClassName = [
    'media-card',
    `media-card--${variant}`,
    isInteractive ? 'media-card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Wrapper
      className={cardClassName}
      aria-label={ariaLabel ?? title}
      {...interactiveProps}
      {...restProps}
    >
      <div className="media-card__image-wrap">
        {image ? (
          <img
            className="media-card__image"
            src={image}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className="media-card__image media-card__image--placeholder" aria-hidden="true">
            {title?.slice(0, 1) ?? 'M'}
          </div>
        )}

        {badge ? <span className="media-card__badge">{badge}</span> : null}

        {/* Play overlay — always rendered, shown via CSS on hover */}
        <div className="media-card__play" aria-hidden="true" />
      </div>

      <div className="media-card__body">
        {meta ? <p className="media-card__meta">{meta}</p> : null}
        {createElement(TitleTag, { className: 'media-card__title' }, title)}
        {subtitle ? <p className="media-card__subtitle">{subtitle}</p> : null}
      </div>
    </Wrapper>
  )
}

export default MediaCard
