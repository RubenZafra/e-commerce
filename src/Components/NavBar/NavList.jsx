import React from 'react'
import {NavListElement} from './NavListElement'

export const NavList = () => {
  return (
    <div>       
      <ul>
        <NavListElement name="Home" />
        <NavListElement name="Spare Parts" />
        <NavListElement name="Contact" />
      </ul>
    </div>
  )
}
