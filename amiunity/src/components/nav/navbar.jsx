import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav>
      <div className='nav-div-1'>
        <h1>
          Amiunity
        </h1>
      </div>
      <div className='nav-div-2'>
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Clubs</li>
          <li>Updates</li>
          <li>About us</li>
        </ul>
      </div>
      <div className='nav-div-3'>
         <button>
            Log out
         </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar