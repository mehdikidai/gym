import React from 'react'
import './../scss/pricing.scss'

function Pricing() {
  return (
    <div className='pricing'>
        <div className="card">
            <span className='price_title'>Lorem, ipsum.</span>
            <h4 className='price'>200 dh</h4>
            <span className='price_title_2'>Lorem, ipsum.</span>
            <span className='line'></span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!</p>
            <button>join new</button>
        </div>
        <div className="card">
            <span className='price_title'>Lorem, ipsum.</span>
            <h4 className='price'>300 dh</h4>
            <span className='price_title_2'>Lorem, ipsum.</span>
            <span className='line'></span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!</p>
            <button>join new</button>
        </div>
        <div className="card">
            <span className='price_title'>Lorem, ipsum.</span>
            <h4 className='price'>1000 dh</h4>
            <span className='price_title_2'>Lorem, ipsum.</span>
            <span className='line'></span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab mollitia voluptate sequi in odit placeat quasi hic cupiditate reprehenderit voluptatum!</p>
            <button>join new</button>
        </div>
    </div>
  )
}

export default Pricing