import { Header, Sidebar } from 'organisms'
import React, { useCallback, useState } from 'react'
import knobData from './mainview.knob'

export const MainView: React.FC = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false)

  const sidebarNav = useCallback(() => [...knobData().sidebar.navigation], [])
  const headerNav = useCallback(() => [...knobData().header.navigation], [])

  const setCollapse = useCallback(() => {
    setSidebarCollapse((prev) => !prev)
  }, [])

  return (
    <div className={sidebarCollapse ? 'sidebar-collapse' : undefined}>
      <Header toggler={setCollapse} navigation={headerNav} />
      <Sidebar hidden={sidebarCollapse} navigation={sidebarNav} />
    </div>
  )
}
