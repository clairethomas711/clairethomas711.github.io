import { useState } from 'react'
import { Reveal } from '../assets/Reveal'
import profilepic from '../assets/claire2_copy.png'
import '../pages/Home.css'
import './Hero.css'

export default function Hero() 
{
  return (
     <section className="hero-section">
          <div className="hero-column">
               <Reveal>
                    <img src={profilepic} alt="Profile Picture" className="profile-pic"></img>
               </Reveal>
          </div>
          <div className="hero-column">
               <Reveal>
                    <h1 className="main-title">Hi, I'm Claire.</h1>
                    <h2 className="sub-title">I like to make video games.</h2>
                    <a href='mailto:clairemlegato@gmail.com' target='_blank'><button className='contact-button'>Contact Me</button></a>
               </Reveal>
          </div>
    </section>
  );
}