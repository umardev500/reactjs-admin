import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkObj } from 'helpers'
import { Item, ItemProps, StyledNavSidebar } from 'molecules'
import React, { useState } from 'react'
import { Dropdown } from './Dropdown'

type Props = {
  items: ItemProps[]
  title: string
  className?: string
}

export const NavSidebar: React.FC<Props> = ({
  title: menuTitle,
  items,
  className,
}) => {
  const [toggle, setToggle] = useState<any>({})

  const handleClick = (
    e: React.MouseEvent,
    id: number | string,
    key: string | number
  ) => {
    e.preventDefault()

    const checkToggle = checkObj(toggle, key)
    const checkKey: boolean = checkToggle ? checkObj(toggle[key], id) : false
    const elState: boolean = checkKey && toggle[key][id].state

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
    const checkToggle = checkObj(toggle, key)
    const checkKey: boolean = checkToggle ? checkObj(toggle[key], id) : false
    const elState: boolean = checkKey && toggle[key][id].state

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

                    {type === 'main' && subMenu !== undefined && (
                      <FontAwesomeIcon fontSize={14} icon={faAngleLeft} />
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
