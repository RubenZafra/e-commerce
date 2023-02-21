import React from 'react'


export const Card = ({product}) => {

  return (
      <div className=" border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="www.google.com">
          <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.img} alt="product"/>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="www.google.com">
            <h5 className="text-xl tracking-tight text-white">{product.productName}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">{product.price}€</span>
              <span className="text-sm text-white line-through">{product.price + 50}€</span>
            </p>
          </div>
            <a href="www.google.com" className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart</a>
        </div>
      </div>
    )}

