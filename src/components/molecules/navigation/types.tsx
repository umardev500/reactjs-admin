import { ReactNode } from 'react'

export type Item = {
  id: string | number
  type: string | undefined
  icon: ReactNode | undefined
  title?: string | undefined
  url: string | undefined
}

export type ItemProps = Item & {
  subMenu: Item[]
}

export type NavigationProps = {
  id: string | number
  title: string
  items: ItemProps[]
}
