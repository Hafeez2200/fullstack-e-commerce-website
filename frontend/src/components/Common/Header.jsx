import React from 'react'
import TopBar from '../Layout/TopBar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
        {/* Top Bar */}
        <TopBar/>
        {/* Nav Bar */}
        <NavBar/>
        {/* Cart Drawer */}
    </header>
  )
}

export default Header