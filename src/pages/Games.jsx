import { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import steam from '../assets/steam.png'
import itch from '../assets/itchio.svg'


import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Games.css'

export default function Games() 
{
  return (
    <>
      <Menu></Menu>
      <div className='my-timeline'>
      <VerticalTimeline layout='1-column-left'>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2025'>
          <h3 className='vertical-timeline-element-title'>???</h3>
          <p>Claire is currently working on a solo project that she hopes to release by the end of 2025.
            More information will be posted here as it becomes available!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2022'>
          <div className='youtube'>
          <iframe src={`https://youtube.com/embed/LsZaWv2CiD8?autoplay=0`}></iframe>   
          </div> 
           <h3 className='vertical-timeline-element-title'>Department of the Devil</h3>
          <p>Department of the Devil is a first-person escape room game in which you must escape from 
            the Devil's office and get out of hell. <i>Bureaucratic</i> hell, specifically. 
          </p>
          <p>Claire worked as the 3D artist, narrative designer, and project manager during this 6 month development cycle.</p>
          <div className='game-image'>
          <a className='link-button' href='https://store.steampowered.com/app/2124040/Department_of_the_Devil/' target='_blank'> <img src={steam}></img> </a>
          <a className='link-button' href='https://pinedrake.itch.io/department-of-the-devil' target='_blank'> <img src={itch}></img> </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2021'>
          <div className='youtube'>
          <iframe src={`https://youtube.com/embed/LtSjGk7T6bk?autoplay=0`}></iframe>   
          </div> 
          <h3 className='vertical-timeline-element-title'>The Phantom Keeper</h3>
          <p>The Phantom Keeper is a monster-collecting RPG adventure where you are a fallen Soul tasked with
            catching and training creatures known as Phantoms. A 30 minute playable demo was completed and pitched to publishers;
            the project is currently on hold while the team explores future opportunities.
          </p>
          <p>Claire worked as the 3D artist, narrative designer, and project manager during this 8 month development cycle,
            during which a 30 minute playable demo was created.
          </p>
          <div className='game-image'>
          <a className='link-button' href='https://store.steampowered.com/app/1780090/The_Phantom_Keeper/' target='_blank'> <img src={steam}></img> </a>
          <a className='link-button' href='https://pinedrake.itch.io/the-phantom-keeper' target='_blank'> <img src={itch}></img> </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2020'>
          <div className='youtube'>
          <iframe src={`https://youtube.com/embed/2UlBBS2I2Xc?autoplay=0`}></iframe>   
          </div> 
          <h3 className='vertical-timeline-element-title'>Apotheker</h3>
          <p>Apotheker is a story-driven logic puzzle game where you must learn the delicate art of potion brewing
            through thoughtful use of ingredients, tools, and funds.
          </p>
          <p>Claire worked as the 3D artist, narrative designer, and project manager during this 6 month development cycle.</p>
          <div className='game-image'>
          <a className='link-button' href='https://store.steampowered.com/app/1429950/Apotheker/' target='_blank'> <img src={steam}></img> </a>
          <a className='link-button' href='https://pinedrake.itch.io/apotheker' target='_blank'> <img src={itch}></img> </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2020'>
          <img src='https://i.ytimg.com/vi/qGviX2SLoFg/maxresdefault.jpg'
           className='game-image'></img>
          <h3 className='vertical-timeline-element-title'>Cooking Mama: Cookstar</h3>
          <p>Cooking Mama: Cookstar is a cooking simulation and minigame compilation for the Nintendo Switch and PS4, developed
            by 1st Playable Productions under oversight from Planet Entertainment and Office Create Corp. The game was completed but saw
            limited release due to publishing disputes.
          </p>
          <p>Claire was a full-time 3D artist on this project and specialized in prop modeling and lighting setups.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2019'>
          <img src='https://www.1stplayable.com/img/games/DisneySnaps_preview-232264.png'
           className='game-image'></img>          
          <h3 className='vertical-timeline-element-title'>Disney: Snaps!</h3>
          <p>Disney: Snaps! was an AR selfie app produced by 1st Playable Productions under oversight from Disney. The app featured
            accessories from many Disney Channel properties that could be placed on the user's face in augmented reality. The app
            was live for nearly 4 years before being sunset in 2021. 
          </p>
          <p>Claire created numerous accessory assets for this project throughout her time at 1st Playable, and implemented their
            AR functionality within Unity engine, including animation triggers and reactive physics.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2018'>
          <div className='youtube'>
          <iframe src={`https://youtube.com/embed/SHILx5-t3V0?autoplay=0`}></iframe>   
          </div>      
          <h3 className='vertical-timeline-element-title'>Shikigami: The Paper Spirits</h3>
          <p>Shikigami is a 3D platforming adventure where you play as an enchanted piece of origami paper. Fold into a variety of
            creatures to unlock new abilities and stop the evil spirit, Kuma!
          </p>
          <p>Claire was the sole 3D artist on this project and developed all assets and animations, including the creation of
            an opening cutscene rendered in Maya.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>);
}