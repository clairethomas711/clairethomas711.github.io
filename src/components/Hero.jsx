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
                    <div className='info'>
                    <img src={profilepic} alt="Profile Picture" className="profile-pic"></img>
                    </div>
               </Reveal>
          </div>
          <div className="hero-column">
               <Reveal>
                    <div className='info'>
                    <h1 className="main-title">Hi, I'm Claire.</h1>
                    <h2 className="sub-title">I am a multi-disciplinary developer of games, software, and 3D art. From AAA to indie to the classroom, I want to help your project succeed!</h2>
                    <a href='mailto:clairemlegato@gmail.com' target='_blank'><button className='contact-button'>Contact Me</button></a>
                    </div>
               </Reveal>
          </div>
    </section>
  );
}