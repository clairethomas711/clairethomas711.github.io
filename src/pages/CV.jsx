import { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import { Reveal } from '../assets/Reveal'
import './CV.css'
import cv from '../assets/Claire_Thomas_CV_2025.pdf'

export default function CV() 
{
  return (
    <>
    <Menu></Menu>
    <div className='button-item'>
      <a href={cv} download={cv}><button>Download PDF</button></a>
    </div>
    <Reveal>
    <h1 className='item-header'>Education</h1>
    </Reveal>
    <Reveal>
    <p className='item'>
      <b>Rensselaer Polytechnic Institute (RPI)</b><br />
      Troy, NY<br />
      Graduation: May 2019<br />
      <i>Bachelor of Science in Games and Simulation Arts and Sciences (GSAS)<br />
        Concentration: Writing</i><br />
      <i>Dual Major in Electronic Arts (EARTS)</i><br />
    </p>
    </Reveal>
    <Reveal>
    <h1 className='item-header'>Professional Experience</h1>
    </Reveal>
    <Reveal>
    <p className='item'>
      <b>Pine Drake Games</b><br />
      Remote<br />
      July 2020-Present<br />
      <i>Cofounder, 3D Artist, General Developer</i><br />
    </p>
    <p className='item'>
      <b>1st Playable Productions</b><br />
      Troy, NY<br />
      March 2019 - June 2020<br />
      <i>3D Artist</i><br />
    </p>
    <p className='item'>
      <b>Cognitive and Immersive Systems Lab (CISL)</b><br />
      Troy, NY<br />
      May 2018 - August 2018<br />
      <i>3D Artist, Undergraduate Researcher</i><br />
    </p>
    </Reveal>
    <Reveal>
    <h1 className='item-header'>Teaching Experience</h1>
    </Reveal>
    <Reveal>
    <p className='item'>
      <b>Adjunct Lecturer at SUNY University at Albany</b><br />
      Albany, NY<br />
      January 2023 - May 2025<br />
      <i>Spring 2025: Game Design and Development II; Programming for Problem Solving; Honors Thesis Advisor</i><br />
      <i>Fall 2024: Serious Games; Programming for Problem Solving; Honors Thesis Advisor</i><br />
      <i>Spring 2024: Game Design and Development II; Programming for Problem Solving; Augmented and Virtual Reality</i><br />
      <i>Fall 2023: Serious Games; Programming for Problem Solving</i><br />
      <i>Spring 2023: Game Design and Development II</i><br />
    </p>
    </Reveal>
    <Reveal>
    <p className='item'>
      <b>Adjunct Professor at Rensselaer Polytechnic Institute</b><br />
      Troy, NY<br />
      August 2022 - December 2022<br />
      <i>Fall 2022: Art for Interactive Media; 3D Animation; 3D Technical Direction</i><br />
    </p>
    </Reveal>
    <Reveal>
    <h1 className='item-header'>Published Works</h1>
    </Reveal>
    <Reveal>
    <h2 className='item-sub-header'>Video Games</h2>
    <p className='item'>
      <a href={'/games'} text-align='center'><button text-align='center'>View All Games</button></a>
    </p>
    </Reveal>
    <Reveal>
    <h2 className='item-sub-header'>Animations</h2>
    <p className='item'>
      <b>Angels</b> <br/>
      Independent Work (Producer, Director, Animator)<br />
      May 2019<br />
      <i>Showcased at The Arts Center of the Capital Region. Made In Maya</i><br />
    </p>
    <p className='item'>
      <b>The Golden Creature</b><br /> 
      Independent Work (Animator, Technical Artist)<br />
      May 2018<br />
      <i>Showcased in a private viewing. Made In Maya</i><br />
    </p>
    </Reveal>
    <Reveal>
    <h2 className='item-sub-header'>Writings & Talks</h2>
    <p className='item'>
      <b>Creativity & Inspiration: The Importance of Weird Little Games</b><br />
      April 2025<br />
      <i>Talk given at NYCWiC 2025 and Keynote for ASIS&T Game Jam 2025</i><br />
    </p>
    <p className='item'>
      <b>Choose Your Own Adventure</b> (short fiction)<br />
      January 2017<br />
      <i>Published within McKinney Writing Content</i><br />
    </p>
    <p className='item'>
      <b>The Lost Three</b> (novella)<br />
      May 2015<br />
      <i>Published by Amazon Independent Publishers</i><br />
    </p>
    </Reveal>
    <Reveal>
      <h1 className='item-header'>Honors & Awards</h1>
      </Reveal>
    <Reveal>
      <div className='item'>
      <ul className='bullet-list'>
        <li className='stars'>Nominated for UAlbany's Torch Award for Excellent Student Engagement</li>
        <li className='stars'>Audience Choice Award at Champlain Games Festival for Apotheker</li>
        <li className='stars'>Yogscast Tiny Teams Award Winner for Apotheker</li>
        <li className='stars'>Rensselaer Polytechnic Institute Dean's List with Honor</li>
        <li className='stars'>1st Place McKinney Writing Contest (Fiction / Drama Piece)</li>
        <li className='stars'>2nd Place McKinney Writing Contest (Fiction / Drama Piece)</li>
      </ul>
      </div>
    </Reveal>
    <Reveal>
      <h1 className='item-header'>Technical Skills</h1>
      </Reveal>
    <Reveal>
      <h2 className='item-sub-header'>Software</h2>
      <div className='item'>
      <ul className='tech-bullet-list'>
        <li className='stars'>Unity Engine</li>
        <li className='stars'>Jira</li>
        <li className='stars'>Maya</li>
        <li className='stars'>Unreal Engine</li>
        <li className='stars'>Processing</li>
        <li className='stars'>Blender</li>
        <li className='stars'>Godot</li>
        <li className='stars'>Krita</li>
        <li className='stars'>Adobe Photoshop</li>
        <li className='stars'>Github</li>
        <li className='stars'>Excel Programming</li>
        <li className='stars'>Substance Painter</li>
      </ul>
      </div>
      </Reveal>
    <Reveal>
      <h2 className='item-sub-header'>Programming Languages</h2>
      <div className='item'>
      <ul className='tech-bullet-list'>
        <li className='stars'>HTML</li>
        <li className='stars'>C++</li>
        <li className='stars'>Python</li>
        <li className='stars'>C#</li>
        <li className='stars'>C</li>
        <li className='stars'>Javascript</li>
        <li className='stars'>Java</li>
      </ul>
      </div>
    </Reveal>
    </>
  );
}