import React from 'react';
import  { Button }  from '../Button/Button'
import  { Logo }  from './Logo'
import  { SearchBar }  from './SearchBar'
import  { Cart }  from './Cart'
import  { NavList }  from './NavList'

export const NavBar = () => {
    return (
        <div className="flex justify-around h-40 items-center bg-orange-200">
            <Logo />
            <div className="flex">
                <NavList />
                <SearchBar />
            </div>
            <Cart />
            <div>
                <Button name='Log In'/>
                <Button name='Sign In'/>       
            </div>
        </div>
    )
}
