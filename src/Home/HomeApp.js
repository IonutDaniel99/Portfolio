import React from 'react'
import { NavLink } from 'react-router-dom'
import Bg2ColorsFollow from './Bg2ColorsFollow'

function HomeApp() {
    return (
        <div className='flex w-screen h-screen gap-20 bg-darkNotDark'>
            <Bg2ColorsFollow />
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Indonesia'}  >Indonesia</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Cards'}  >Cards</NavLink>
            <NavLink to={'/Projects/MazdaRx8'}  >MazdaRx8</NavLink>
        </div>
    )
}

export default HomeApp