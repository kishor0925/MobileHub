import React from 'react'
import s1 from './Images/slide1.jpg'

const Courosel = () => {
    return (
        <div
            id='hero'
            className='carousel slide'
            data-bs-ride='carousel'
            data-bs-interval='5000'
        >

            <div className='carousel-inner'>

                <div className='carousel-item active'>
                    <img src={s1} className='img-fluid w-100' />
                </div>

                <div className='carousel-item active'>
                    <img src={s1} className='img-fluid w-100' />
                </div>

                <div className='carousel-item active'>
                    <img src={s1} className='img-fluid w-100' />
                </div>

                <div className='carousel-item active'>
                    <img src={s1} className='img-fluid w-100' />
                </div>

            </div>


            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target="#hero"
                data-bs-slide="prev"
            >
                <span className='btn btn-danger rounded-pill'>Prev</span>

            </button>

            <button
                className='carousel-control-next'
                type='button'
                data-bs-target="#hero"
                data-bs-slide="next"
            >
                <span className='btn btn-danger rounded-pill'>Next</span>
            </button>
            
        </div>
    )
}

export default Courosel