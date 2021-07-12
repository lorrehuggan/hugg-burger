import React from 'react'
import './MenuCard.scss';



function MenuCard({img, type, name, price}) {
    return (
        <div className="menu--card">
        <img className="menu--card__img" src={img} alt="big-ready" />
         <div className="menu--card__details">
        <small>{type}</small>
        <h4>{name}</h4>
        <p>{price}</p>
        </div>
  </div>
    )
}

export default MenuCard
