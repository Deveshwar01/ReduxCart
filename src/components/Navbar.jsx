import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const items = useSelector(state => state.cart);

  return (
    <div className='navbar'>
      <span className='logo'>E-commerce cart management using redux</span>
      <div>
        <NavLink exact className='navLink' activeClassName='active' to='/'>Home</NavLink>
        <NavLink className='navLinkcartCount' activeClassName='active' to='/cart'><FaCartShopping />{items.length}</NavLink>
      </div>
    </div>
  );
}

export default Navbar;