import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Moodify
      </div>
      <div className="navbar-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">Search</button>
        <button className="nav-button">Library</button>
      </div>
    </nav>
  )
}

export default Navbar
