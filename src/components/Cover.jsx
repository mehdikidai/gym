import React from 'react'
import '../scss/cover.scss'
import Nav from './Nav'

function Cover() {
  return (
    <div className="photo">
        <div className='container'>
            <Nav/>
            <h1>Lorem ipsum <span>dolor</span> sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis nobis temporibus alias dicta. Quos temporibus maxime minima modi. Voluptates.</p>
            <button className='btn_cover'>click here</button>
        </div>
    </div>
    
  )
}

export default Cover