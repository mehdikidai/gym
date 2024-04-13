import React from 'react'
import './../scss/nav.scss'
import Logo from '../images/logo.png'

function Nav() {
  return (
    <div className='nav'>
        <button><img width={120} src={Logo}/></button>
        <ul className='nav_ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav