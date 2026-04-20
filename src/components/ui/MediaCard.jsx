import './MediaCard.css'

const MediaCard = ({
  image,
  title,
  subtitle,
  badge,
  meta,
  onClick,
  variant = 'default',
}) => {
  const Wrapper = onClick ? 'button' : 'article'
  const interactiveProps = onClick
    ? { type: 'button', onClick }
    : {}

  const metaLabel = badge ?? meta

  return (
    <Wrapper
      className={`media-card media-card--${variant}${onClick ? ' media-card--interactive' : ''}`}
      {...interactiveProps}
    >
      <div className="media-card__image-wrap">
        {image ? (
          <img className="media-card__image" src={image} alt={title} />
        ) : (
          <div className="media-card__image media-card__image--placeholder" aria-hidden="true">
            {title?.slice(0, 1) ?? 'M'}
          </div>
        )}
        {metaLabel ? <span className="media-card__badge">{metaLabel}</span> : null}
      </div>

      <div className="media-card__body">
        <h3 className="media-card__title">{title}</h3>
        {subtitle ? <p className="media-card__subtitle">{subtitle}</p> : null}
      </div>
    </Wrapper>
  )
}

export default MediaCard
