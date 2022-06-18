import { Item } from 'molecules'
import React from 'react'
import { SubMenu } from './SubMenu'

type Props = {
  items: Item[]
  className?: string
}

const DropdownEl: React.FC<Props> = ({ items, className }) => (
  <SubMenu className={className} items={items} />
)

export const Dropdown = React.memo(DropdownEl)
