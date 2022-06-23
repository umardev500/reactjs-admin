import { ItemProps } from 'molecules'
import React from 'react'
import { StyledNavHeader } from './NavHeader.styles'

type Props = {
  toggler: () => void
  items: ItemProps[]
}

const NavHeaderElement: React.FC<Props> = ({ toggler, items }) => {
  console.log('RENDER NAVIGATION MENU')

  const handleTogglerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggler()
  }

  const renderLink = (item: ItemProps) => (
    <a
      onClick={item.type === 'toggler' ? handleTogglerClick : () => {}}
      href={item.url}
      className="flex text-slate-500 hover:text-slate-700 px-4 py-2 items-center justify-center"
    >
      {item.title && item.icon && (
        <>
          <span>{item.icon}</span>
          <span className="ml-4">{item.title}</span>
        </>
      )}

      {item.title && !item.icon && <span>{item.title}</span>}
      {item.icon && !item.title && <span>{item.icon}</span>}
    </a>
  )

  return (
    <StyledNavHeader className="flex">
      {items.map((item) => (
        <li key={item.id.toString()}>{renderLink(item)}</li>
      ))}
    </StyledNavHeader>
  )
}

export const NavHeader = React.memo(NavHeaderElement, () => true)
