import React from 'react'
import './../scss/title.scss'

function Title() {
  return (
    <div className='title_box'>
        <h2>Lorem, ipsum.</h2>
        <span className='span_title'></span>
        <h3>Lorem <span className='span_h3'>ipsum</span></h3>
    </div>
  )
}

export default Title