import React from 'react'
import './../scss/footer.scss'
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Iinstagram from "../icons/Iinstagram";

function Footer() {
  return (
    <div className='footer'>
      <div className="box">
        <ul>
          <li><a href="#"><Facebook w={16}/></a></li>
          <li><a href="#"><Twitter w={16}/></a></li>
          <li><a href="#"><Iinstagram w={16}/></a></li>
        </ul>
        <span>© Copyright { new Date().getFullYear() } Mehdi Kidai</span>
      </div>
    </div>
  )
}

export default Footer