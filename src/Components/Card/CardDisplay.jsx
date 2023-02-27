import React from 'react'
import { Card } from './Card'
import { products } from './Db'



export const CardDisplay = () => {
  return (
    <div className='flex bg-gray-800 h-screen justify-around'>
        {products.map((product, {productName}) => {
          return <Card key={Date.now()} name={productName} product={product} />
      })}
    </div>
  )
}
