import { createElement } from 'react'
import './ContentRow.css'

const ContentRow = ({
  children,
  columns = 'auto',
  dense = false,
  as: Tag = 'div',
}) => {
  const columnClass =
    columns === 'two'
      ? 'content-row--two'
      : columns === 'three'
        ? 'content-row--three'
        : columns === 'four'
          ? 'content-row--four'
          : 'content-row--auto'

  return (
    createElement(
      Tag,
      { className: `content-row ${columnClass}${dense ? ' content-row--dense' : ''}` },
      children,
    )
  )
}

export default ContentRow
