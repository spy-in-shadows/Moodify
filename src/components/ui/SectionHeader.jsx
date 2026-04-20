import { createElement } from 'react'
import './SectionHeader.css'

const SectionHeader = ({
  title,
  subtitle,
  actionLabel,
  onAction,
  actionHref,
  as: Tag = 'header',
}) => {
  let action = null

  if (actionHref && actionLabel) {
    action = (
      <a className="section-header__action" href={actionHref}>
        {actionLabel}
      </a>
    )
  } else if (onAction && actionLabel) {
    action = (
      <button className="section-header__action" type="button" onClick={onAction}>
        {actionLabel}
      </button>
    )
  }

  return createElement(
    Tag,
    { className: 'section-header' },
    <div className="section-header__content">
      <h2 className="section-header__title">{title}</h2>
      {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
    </div>,
    action ? <div className="section-header__aside">{action}</div> : null,
  )
}

export default SectionHeader
