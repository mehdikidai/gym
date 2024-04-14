import React from 'react'
import './../scss/nav.scss'
import Logo from '../images/logo.png'

function Nav() {
  return (
    <div className='nav'>
        <button><img width={120} src={Logo}/></button>
        <ul className='nav_ul'>
            <li><a href="#"><span></span>Home</a></li>
            <li><a href="#"><span></span>About</a></li>
            <li><a href="#"><span></span>Blog</a></li>
            <li><a href="#"><span></span>Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav