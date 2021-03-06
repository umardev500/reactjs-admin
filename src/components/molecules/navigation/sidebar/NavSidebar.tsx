import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkState } from 'helpers'
import { Item, ItemProps, StyledNavSidebar } from 'molecules'
import React, { useState } from 'react'
import { Dropdown } from './Dropdown'

type Props = {
  items: ItemProps[]
  title: string
  className?: string
}

const NavSidebarElement: React.FC<Props> = ({
  title: menuTitle,
  items,
  className,
}) => {
  const [toggle, setToggle] = useState<any>({})

  const handleClick = (
    e: React.MouseEvent,
    id: number | string,
    key: string
  ) => {
    e.preventDefault()

    const elState = checkState(id, key, toggle)

    if (elState) {
      setToggle((prev: any) => ({
        ...prev,
        [key]: { ...prev[key], [id]: { state: false } },
      }))

      return
    }

    // Single view
    // setToggle((prevState: any) => ({
    //   ...prevState,
    //   [key]: { [id]: { state: true } },
    // }))

    // Multi view
    setToggle((prevState: any) => ({
      ...prevState,
      [key]: { ...prevState[key], [id]: { state: true } },
    }))
  }

  const renderDropdown = (
    dropdownItems: Item[],
    id: number | string,
    key: string
  ) => {
    const elState = checkState(id, key, toggle)

    return (
      <Dropdown
        className={`overflow-hidden ${elState ? 'h-auto' : 'h-0'}`}
        items={dropdownItems}
      />
    )
  }

  console.log('RENDER')

  return (
    <StyledNavSidebar className={`mb-4 ${className || ''}`}>
      {/* Sidebar menu */}
      <nav>
        <ul>
          {items.length > 0 &&
            items.map(({ id, title, icon, subMenu, type }) => (
              <li key={id.toString()}>
                <a
                  onClick={
                    subMenu !== undefined && subMenu.length > 0
                      ? (e) => handleClick(e, id, menuTitle)
                      : () => {}
                  }
                  href="#link"
                  className={`w-full flex py-2 px-4 rounded ${
                    title === 'Dashboard'
                      ? 'bg-blue-700 text-white'
                      : 'hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  <span className="w-6 flex items-center justify-center overflow-hidden">
                    {icon}
                  </span>
                  <p className="ml-4 font-roboto w-full justify-between flex items-center font-medium text-lg">
                    {title}

                    {type === 'main' &&
                      subMenu !== undefined &&
                      subMenu.length > 0 && (
                        <FontAwesomeIcon
                          className={`${
                            checkState(id, menuTitle, toggle) && '-rotate-90'
                          }
                          `}
                          fontSize={14}
                          icon={faAngleLeft}
                        />
                      )}
                  </p>
                </a>

                {subMenu !== undefined &&
                  subMenu.length > 0 &&
                  renderDropdown(subMenu, id, menuTitle)}
              </li>
            ))}
        </ul>
      </nav>
    </StyledNavSidebar>
  )
}

export const NavSidebar = React.memo(NavSidebarElement, () => true)
