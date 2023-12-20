// import React from 'react'
import './styles.css'
import MobileMenu from './MobileMenu';
import Button from '../Button';

function Header() {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker<span style={{color: "var(--blue)"}}>.</span></h1>
      <div className='links'>
        <a href='/'>
          <p className='link'>Home</p>
        </a>
        <a href='/'>
          <p className='link'>Compare</p>
        </a>
        <a href='/'>
          <p className='link'>Watchlist</p>
        </a>
        <a href='/'>
          <Button text="Dashboard" onClick={() => console.log("clicked")} outlineBtn={false}/>
        </a>
      </div>

      <div className='mobile-drawer'>
        <MobileMenu />

      </div>
    </div>
  )
}

export default Header;