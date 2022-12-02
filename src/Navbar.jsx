import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {SidebarData} from './SidebarData';
import {Col } from 'react-bootstrap'
const Navbar = () => {
    const [sidebar , setSidebar] =useState(false)
    const showSidebar = () => setSidebar (!sidebar)

  return (
    <>
    <Col lg={12} md={12} sm={12}  className="header2">
        
    
    <div className="navbar">
    <Link to="#"  className="menu_barss" >
    <MenuIcon   className='menu_bars-menuIcon' onClick={showSidebar} /> <span className='all'>ALL</span> </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
    <ul className='nav-menu-atems' >
        <li className='navbar-toggle' onClick={showSidebar} >
             <Link className='menu-bars' >
            <CloseIcon />
             </Link>
        </li>
        {SidebarData.map((item , index ) => {
            return (
                <li key ={index} className={item.cName}   >
                <Link to ={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
            )        }
        )}
    </ul>


    </nav>
    
    <div className='header_links'>
    <Link  className='headerLinksOption' >Today's Deals</Link>
    <Link  className='headerLinksOption'>Prime</Link>
    <Link  className='headerLinksOption'>Mobile Phones</Link>
    <Link  className='headerLinksOption'>Electronics</Link>
    <Link  className='headerLinksOption'>Help</Link>
    <Link  className='headerLinksOption'>Appliances</Link>
    <Link  className='headerLinksOption'>Fashion</Link>
    <Link  className='headerLinksOption'>Home</Link>
    <Link  className='headerLinksOption'>Grocery</Link>
    <Link  className='headerLinksOption'>Toys & Games</Link>
    </div>
   

  

    
      
    <Link>
    <img className='headerImg' src='/Images/gaming-swm._CB430661085_.jpg' alt=''/>
    </Link>
    
    </Col>
    </>
  )
}

export default Navbar