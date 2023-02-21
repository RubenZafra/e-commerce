import React from 'react'

export const NavListElement = ({name}) => {
  return (
    <a href="www.google.com" className="text-xl text-white font-bold underline decoration-2 hover:decoration-4 transition">{name}</a>
  )
}
