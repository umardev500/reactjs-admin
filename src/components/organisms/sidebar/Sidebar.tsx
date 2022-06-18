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
  navigation: NavigationProps[]
}

export const Sidebar: React.FC<Props> = ({ navigation }) => (
  <StyledSidebar
    className="h-full absolute overflow-hidden"
    style={{ width: 250 }}
  >
    <Logo text="Admin" />

    <div className="h-full bg-transparent px-2 w-full pt-4">
      {navigation.length > 0 &&
        navigation.map(({ id, items, title }) => (
          <NavSidebar key={id.toString()} title={title} items={items} />
        ))}
    </div>
  </StyledSidebar>
)
