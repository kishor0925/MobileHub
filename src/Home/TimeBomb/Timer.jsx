import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Timer.css'
const Timer = () => {


    const offer = 10 * 60 * 60 * 1000;

    const [time, setTime] = useState(Date.now() + offer);
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect( () => {
        

        setInterval( () => {

        const now = Date.now();
        const diffrence = time - now;

            if(diffrence <= 0)
            {
                setTimeLeft(now + offer);
            }
            else
            {
                setTimeLeft(diffrence)
            }
        },1000 )

    },[time])


    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor(( timeLeft / (1000 * 60) ) % 60);
    const seconds = Math.floor( (timeLeft / 1000) % 60 );



  return (
    <div className='timerbg'>
        <div className='timer-inner p-5 '>
            <h1 className='text-center'>Get up to 30% off on Any Mobiles</h1>
            <h2>Open Box Delivery</h2>
            <h2 className='text-center'>{String(hours).padStart(2,"0") } :{String(minutes).padStart(2, "0") } : {String(seconds).padStart(2,"0")}</h2>
            <button className='button'>
                Discover Sales  <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    </div>
  )
}

export default Timer