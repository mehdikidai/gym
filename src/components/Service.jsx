import React from 'react'
import './../scss/service.scss'
import CardPhoto from './../images/card.jpg'

function Service() {
  return (
    <div className='service'>
        <div className="card">
            <img src={CardPhoto} alt="card"/>
            <div className='card_title'>
                <h4>Lorem, ipsum dolor.</h4>
            </div>
        </div>
        <div className="card">
            <img src={CardPhoto} alt="card"/>
            <div className='card_title'>
                <h4>Lorem, ipsum dolor.</h4>
            </div>
        </div>
        <div className="card">
            <img src={CardPhoto} alt="card"/>
            <div className='card_title'>
                <h4>Lorem, ipsum dolor.</h4>
            </div>
        </div>
    </div>
  )
}

export default Service