import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeApp() {
    return (
        <div className='flex gap-20'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Indonesia'}  >Indonesia</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Cards'}  >Cards</NavLink>
            <NavLink to={'/Projects/MazdaRx8'}  >MazdaRx8</NavLink>
        </div>
    )
}

export default HomeApp