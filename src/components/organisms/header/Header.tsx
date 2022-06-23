import { NavHeader, NavigationProps } from 'molecules'
import React from 'react'
import { StyledHeader } from './Header.styles'
import './Header.scss'

type Props = {
  toggler: () => void
  navigation: () => NavigationProps[]
}

export const Header: React.FC<Props> = ({ toggler, navigation }) => (
  <StyledHeader className="main-header p-2 justify-between border-b flex items-center">
    {navigation().map(({ id, items }) => (
      <NavHeader toggler={toggler} items={items} key={id.toString()} />
    ))}
  </StyledHeader>
)
