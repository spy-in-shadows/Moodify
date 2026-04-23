import { createElement } from 'react'
import './SectionHeader.css'

const SectionHeader = ({
  title,
  subtitle,
  actionLabel,
  onAction,
  actionHref,
  actionAriaLabel,
  as: Tag = 'header',
  titleAs: TitleTag = 'h2',
  className = '',
  ...restProps
}) => {
  let action = null

  if (actionHref && actionLabel) {
    action = (
      <a className="section-header__action" href={actionHref} aria-label={actionAriaLabel}>
        {actionLabel}
      </a>
    )
  } else if (onAction && actionLabel) {
    action = (
      <button
        className="section-header__action"
        type="button"
        onClick={onAction}
        aria-label={actionAriaLabel}
      >
        {actionLabel}
      </button>
    )
  }

  return createElement(
    Tag,
    {
      className: ['section-header', className].filter(Boolean).join(' '),
      ...restProps,
    },
    <div className="section-header__content">
      {createElement(TitleTag, { className: 'section-header__title' }, title)}
      {subtitle ? <p className="section-header__subtitle">{subtitle}</p> : null}
    </div>,
    action ? <div className="section-header__aside">{action}</div> : null,
  )
}

export default SectionHeader
