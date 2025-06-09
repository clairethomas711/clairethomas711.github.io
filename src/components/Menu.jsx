import { useState } from 'react'
import './Menu.css'

export default function Menu() 
{
  return (
     <nav className='navBar'>
          <div className='navLink'>
            <a href='/'>HOME</a>
          </div>
          <div className='navLink'>
            <a href='/games'>GAMES</a>
          </div>
          <div className='navLink'>
            <a href='/art'>3D ART</a>
          </div>
          <div className='navLink'>
            <a href='/cv'>ACADEMIC CV</a>
          </div>
     </nav>
  );
}