import { Sidebar } from 'organisms'
import React, { useCallback, useState } from 'react'
import knobData from './mainview.knob'

export const MainView: React.FC = () => {
  const [state, setState] = useState(false)
  console.log('state: ', state)

  const sidebarNav = useCallback(() => [...knobData().sidebar.navigation], [])

  return (
    <>
      <button
        className="ml-72 mt-4 bg-rose-700 p-4 text-white"
        type="button"
        onClick={() => setState((prev) => !prev)}
      >
        BUTTON
      </button>
      <Sidebar navigation={sidebarNav} />
    </>
  )
}
