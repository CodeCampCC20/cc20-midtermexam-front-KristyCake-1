import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout