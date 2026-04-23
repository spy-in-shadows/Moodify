import { createElement } from 'react'
import './ContentRow.css'

const ContentRow = ({
  children,
  columns = 'auto',
  dense = false,
  as: Tag = 'div',
  className = '',
  ...restProps
}) => {
  const columnClass =
    columns === 'two'
      ? 'content-row--two'
      : columns === 'three'
        ? 'content-row--three'
        : columns === 'four'
          ? 'content-row--four'
          : 'content-row--auto'
  const rowClassName = ['content-row', columnClass, dense ? 'content-row--dense' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    createElement(
      Tag,
      { className: rowClassName, ...restProps },
      children,
    )
  )
}

export default ContentRow
