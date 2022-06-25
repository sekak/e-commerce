import React from 'react'
import './Navbar.css'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import { Link ,useLocation} from 'react-router-dom'
const Navbar = ({cart}) => {
    const location = useLocation();

  return (
    <div className='all'>
        <div className='left'>
        <Link to="/">
        <img className='imgcom' src="https://cdn3.vectorstock.com/i/1000x1000/33/82/e-commerce-logo-vector-14273382.jpg" alt=""  />
        <span>Commerce.js</span>
        </Link>
        </div>
        <div className='right'>
        {location.pathname === "/" &&(

       
        <Link to="/cart">
          <MdOutlineAddShoppingCart className='outline'/>
            <span className='variant'>{cart.total_items}</span>
        </Link>
        )}
        </div>
    </div>
  )
}

export default Navbar