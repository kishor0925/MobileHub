import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe mt-5 container-fluid'>

        <h1>Don't miss anything!</h1>
        <input type="text" placeholder='Enter your email address'  />
        <button className='button'>Subcribe Now</button>
    </div>
  )
}

export default Subscribe