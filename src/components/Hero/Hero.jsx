import React from 'react'
import './Hero.css'

export default function Hero(){
    return(
        <div className='--hero-container'>
            <img className="--hero-img" src="https://res.cloudinary.com/relentlessrawle/image/upload/v1660074332/Group_77_sybcxo.png" alt="" />
            <div className='--hero-text'>
                <h2 className='--hero-title'>Online Experiences</h2>
                <p className='--hero-desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
    </p>
            </div>  
        </div>
    )
}