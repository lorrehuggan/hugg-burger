import React from 'react'
import Navigation from '../Components/Navigation'
import './Menu.scss'
import MenuCard from '../Components/MenuCard'
import { menuData } from '../Data/data'

function Menu() {
    return (
        <div className='menu'>
            <Navigation/>
            <div className="menu--container">
                <div className="menu--cards">
                    {menuData.map((card)=>{
                        return (<MenuCard  img={card.img} type={card.class} name={card.name} price={card.price}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu
