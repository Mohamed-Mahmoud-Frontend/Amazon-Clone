import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar , Nav  } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
  <Navbar className='header' expand="lg" >
      
      <div className='nav_left'>
      <div>
      <Link to="/"> <img className='nav_img' src='/Images/logo.png' alt=''/></Link>
      </div>
      <div className="nav_location">
      <i className="fa-sharp fa-solid fa-location-dot"></i>      
      <h5>Egypt</h5>
      </div>
      </div>
      <div className='nav_search'>
        <input  type="search"  className='searchInput'/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <Navbar.Toggle  className='aa' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
      
          <Nav className="nav_options ">
          <div className='navOptionLinks'>
          <span className='navOptionLinksOne'>Hello</span>
            <Link className='navOptionLinksTwo' to="" >Sign in</Link>
          </div>
          <div className='navOptionLinks'>
          <span className='navOptionLinksOne'>Returns</span>
          <Link  className='navOptionLinksTwo' to="">& Orders</Link>
          </div>
          <div className='navOptionLinks'>
          <span className='navOptionLinksOne'>Your</span>
          <Link  className='navOptionLinksTwo' to="">Prime</Link>
          </div>
          <div className='cartOption'>
            <Link className='cartOptionOne'>
            <i className="  fa-solid fa-cart-shopping"></i>  
            </Link>
            <span className='cartCount'>0</span>
          </div>
          </Nav>
          </Navbar.Collapse>      
    </Navbar>



  
     
 



    </>
  )
}

export default Header