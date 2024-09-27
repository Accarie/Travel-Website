import { Button } from './Button';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const[button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true); 
    }

  };
  window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>TRVL <i className='fab fa-typo3'/></Link>
            <div className='nav-menu' onClick={handleClick}>
              <i className={click ? 'fas fa-times ': 'fas fa-bars'}/>
              <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Signup</Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar