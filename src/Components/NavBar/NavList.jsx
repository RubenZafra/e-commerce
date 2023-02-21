import React from 'react'
import {NavListElement} from './NavListElement'

export const NavList = () => {
  return (
    <div className='flex flex-row gap-5'>          
        <NavListElement name="Home" />
        <NavListElement name="Spare Parts" />
        <NavListElement name="Contact" />
    </div>
  )
}
