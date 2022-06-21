import { Sidebar } from 'organisms'
import React, { useCallback, useState } from 'react'
import knobData from './mainview.knob'

export const MainView: React.FC = () => {
  const [sidebarHidden] = useState<boolean>(false)

  const sidebarNav = useCallback(() => [...knobData().sidebar.navigation], [])

  return (
    <>
      <div className="ml-72" />
      <Sidebar hidden={sidebarHidden} navigation={sidebarNav} />
    </>
  )
}
