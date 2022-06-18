import { Item, StyledNavSidebar } from 'molecules'
import React, { useState } from 'react'

type Props = {
  items: Item[]
  className?: string
}

export const SubMenuFake = () => {
  const [show, setShow] = useState(false)

  console.log('state is', show)

  return {
    state: show,
    setState: setShow,
  }
}

export const SubMenu: React.FC<Props> = ({ items, className }) => (
  <StyledNavSidebar className={className || ''}>
    <nav>
      <ul>
        {items.length > 0 &&
          items.map(({ id, title, icon }) => (
            <li key={id.toString()}>
              <a
                href="#link"
                className={`w-full flex py-2 px-4 rounded text-slate-600 ${
                  title === 'Dashboard'
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-slate-200'
                }`}
              >
                <span className="w-6 flex items-center justify-center overflow-hidden">
                  {icon}
                </span>
                <p className="ml-4 font-roboto w-full justify-between flex items-center font-medium text-lg">
                  {title}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </nav>
  </StyledNavSidebar>
)
