import React from 'react'
import { Card } from './Card'
import s5x from '../img/s5x.webp'
import s4x from '../img/s4x.webp'
import s4r from '../img/s4r.webp'
import Case from '../img/case.webp'


const products = 
    [{
        productName: "Ollo S5X",
        price: 449,
        img: s5x,
    },
    {
        productName: "Ollo S4X",
        price: 399,
        img: s4x,
    }, 
    {
        productName: "Ollo S4R",
        price: 399,
        img: s4r,
    },
    {
        productName: "Hard Case",
        price: 29,
        img: Case,
    }]


export const CardDisplay = () => {
  return (
    <div className='flex bg-gray-800 h-screen justify-around'>
        {products.map(product => (
          <Card key={product.productName} product={product} />
        ))}
    </div>
  )
}
