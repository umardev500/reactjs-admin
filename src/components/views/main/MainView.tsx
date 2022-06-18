import { Sidebar } from 'organisms'
import React from 'react'
import knobData from './mainview.knob'

export const MainView: React.FC = () => <Sidebar {...knobData().sidebar} />
