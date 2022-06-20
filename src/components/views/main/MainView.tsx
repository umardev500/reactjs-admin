import { Sidebar } from 'organisms'
import React, { useCallback, useState } from 'react'
import knobData from './mainview.knob'

export const MainView: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(false)
  // console.log('state: ', state)
  const [sidebarHidden, setSidebarHidden] = useState<boolean>(false)
  console.log('hidden state: ', sidebarHidden)

  const sidebarNav = useCallback(() => [...knobData().sidebar.navigation], [])

  return (
    <>
      <div className="ml-72">
        <button
          type="button"
          className="transition ease-in-out delay-150 bg-blue-500 p-4 hover:bg-rose-700 duration-700"
        >
          Save Changes
        </button>
        <button
          className="mt-4 bg-rose-700 rounded p-4 text-white"
          type="button"
          onClick={() => setState((prev) => !prev)}
        >
          BUTTON
        </button>
        <button
          className="mt-4 ml-4 bg-green-700 rounded p-4 text-white"
          type="button"
          onClick={() => setSidebarHidden((prev) => !prev)}
        >
          TOGGLER
        </button>
      </div>
      <Sidebar hidden={sidebarHidden} navigation={sidebarNav} />
    </>
  )
}
