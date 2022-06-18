import { ReactNode } from 'react'

export type Item = {
  id: string | number
  type: string | undefined
  icon: ReactNode | undefined
  title: string | undefined
  url: string | undefined
}

export type ItemProps = Item & {
  subMenu: Item[]
}
