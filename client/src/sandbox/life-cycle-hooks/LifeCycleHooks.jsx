import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from '../../routes/NavItem'
import { Outlet } from 'react-router-dom'

const LifeCycleHooks = () => {
  return (
    <div>
        <AppBar position="sticky" color="transparent">
            <Toolbar>
                <NavItem label='initial' to='initial' sx={{ color: 'black' }}/>
                <NavItem label='useState' to='use-state-cycle' sx={{ color: 'black' }}/>
                <NavItem label='useEffect did mount' to='component-did-mount' sx={{ color: 'black' }}/>
                <NavItem label='useEffect did update' to='component-did-update' sx={{ color: 'black' }}/>
                <NavItem label='useEffect will unmount' to='component-will-unmount' sx={{ color: 'black' }}/>
                <NavItem label='useEffect No Dependancies' to='component-no-dependancies' sx={{ color: 'black' }}/>
            </Toolbar>
        </AppBar>

        <Outlet/>
    </div>
  )
}

export default LifeCycleHooks