import React from 'react'
import "./../scss/LoadingComponent.scss"
import Loading from '../icons/Loading'


function LoadingComponent() {

  return (

    <div className='LoadingComponent'>
        <Loading w="44px" h="44px" style={{color:'#fff'}}/>
    </div>

  )
}

export default LoadingComponent