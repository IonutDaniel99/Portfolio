import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeApp() {
    return (
        <div className='flex gap-20'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Indonesia'} target="_blank" rel="noopener noreferrer" >Indonesia</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Cards'} target="_blank" rel="noopener noreferrer" >Cards</NavLink>
            <NavLink to={'/Projects/MazdaRx8'} target="_blank" rel="noopener noreferrer" >MazdaRx8</NavLink>
        </div>
    )
}

export default HomeApp