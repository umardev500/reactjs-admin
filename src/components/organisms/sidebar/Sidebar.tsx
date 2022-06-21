import { Logo } from 'atoms'
import { ItemProps, NavSidebar } from 'molecules'
import React from 'react'
import StyledSidebar from './Sidebar.styles'

type NavigationProps = {
  id: string | number
  title: string
  items: ItemProps[]
}

type Props = {
  hidden?: boolean
  className?: string
  navigation: () => NavigationProps[]
}

// eslint-disable-next-line no-unused-vars
const SidebarElement: React.FC<Props> = ({ navigation, hidden, className }) => {
  console.log('RENDER SIDEBAR')
  // const navSidebarItems = useCallback((items: ItemProps[]) => items, [])

  return (
    <StyledSidebar
      // eslint-disable-next-line no-useless-concat
      className={`h-full overflow-hidden ${
        hidden && 'sidebar-collapse'
      } ${className}`}
      style={{ width: 250 }}
    >
      <Logo text="Admin" />

      <div className="h-full bg-transparent px-2 w-full pt-4">
        {navigation().length > 0 &&
          navigation().map(({ id, items, title }) => (
            <NavSidebar key={id.toString()} title={title} items={items} />
          ))}
      </div>
    </StyledSidebar>
  )
}

export const Sidebar = React.memo(SidebarElement)
