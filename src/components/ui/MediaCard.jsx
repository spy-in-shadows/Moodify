import { createElement } from 'react'
import './MediaCard.css'

const MediaCard = ({
  image,
  title,
  subtitle,
  badge,
  meta,
  onClick,
  variant = 'default',
  className = '',
  titleAs: TitleTag = 'h3',
  ariaLabel,
  ...restProps
}) => {
  const Wrapper = onClick ? 'button' : 'article'
  const interactiveProps = onClick
    ? { type: 'button', onClick }
    : {}
  const cardClassName = [
    'media-card',
    `media-card--${variant}`,
    onClick ? 'media-card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Wrapper
      className={cardClassName}
      aria-label={ariaLabel}
      {...interactiveProps}
      {...restProps}
    >
      <div className="media-card__image-wrap">
        {image ? (
          <img className="media-card__image" src={image} alt={title} />
        ) : (
          <div className="media-card__image media-card__image--placeholder" aria-hidden="true">
            {title?.slice(0, 1) ?? 'M'}
          </div>
        )}
        {badge ? <span className="media-card__badge">{badge}</span> : null}
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
