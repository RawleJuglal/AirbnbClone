import React from 'react'
import './Card.css'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
            <div className='--card-container'>
                <div className="card" style={{background: `url('/AirBnbClone/images/${props.coverImg}') no-repeat center`, backgroundSize: 'contain'}}>
                    <div className="card-body">
                        <div className="--card-body-container">
                            {badgeText && <span className='--card-body-status'>{badgeText}</span>}
                        </div>
                    </div>
                </div>
                <div className='--info-container'>
                    <div className='--info-rating-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <span className='--info-rating-num'>{props.stats.rating}</span>
                        <span className='--info-rating-quantity'>({props.stats.reviewCount})</span>
                        <span className='--info-rating-country'> &#183; {props.location}</span>
                    </div>
                    <div className='--info-title-container'>
                        <span className='--info-title'>{props.title}
</span>
                    </div>
                    <div className='--info-cost-container'>
                        <span className='--info-cost'>${props.price}</span><span className='--info-person'>/ person</span>
                    </div>
                    
                </div>
            </div>

    )
}

