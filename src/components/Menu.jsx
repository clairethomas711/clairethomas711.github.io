import { useState } from 'react'
import './Menu.css'

export default function Menu() 
{
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <div className="mobileMenu" onClick={handleClick}>
        {click ? (
          <button className="menu-icon">X</button>) : (
            <button className="menu-icon">&#9776;</button>
        )}
      </div>
     <ul className={click ? 'hamburger' : 'navBar'}>
          <li className='navLink' onClick={closeMobileMenu}>
            <a href='/'>HOME</a>
          </li>
          <li className='navLink' onClick={closeMobileMenu}>
            <a href='/games'>GAMES</a>
          </li>
          <li className='navLink' onClick={closeMobileMenu}>
            <a href='/art'>3D ART</a>
          </li>
          <li className='navLink' onClick={closeMobileMenu}>
            <a href='/cv'>ACADEMIC CV</a>
          </li>
      </ul>
      </>
  );
}