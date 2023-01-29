import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeApp() {
    return (
        <div className='flex gap-20'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Projects/FromDesignToCode/Indonesia'} target="_blank" rel="noopener noreferrer" >From Design To Code</NavLink>
        </div>
    )
}

export default HomeApp