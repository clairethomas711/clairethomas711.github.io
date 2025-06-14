import { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu'
import './Art.css'
import { Spin } from '../assets/Spin'

import retro from '../assets/art/FinalAnimation.gif'
import dawn from '../assets/art/dawn_gif.gif'
import s from '../assets/art/FinalAnimation_S.gif'
import profilepic from '../assets/claire2_copy.png'
import barmer from '../assets/art/Barmer_FinalRender.png'
import me from '../assets/art/FinalRender.png'
import boys from '../assets/art/untitled.png'
import star from '../assets/art/star_anim.gif'
import p from '../assets/art/phantoms.gif'


import {Popup} from 'reactjs-popup'

export default function Art() 
{
     
     const images_col_1 = [ 
          {src: retro,
          alt: 'Retro (Character by TriangleMom) - 2024',
          desc_1: 'Created for ArtFight 2024. Character design by @TriangleMom.',
          desc_2: 'Modeled, rigged, animated, and rendered in Blender.'},
          {src: boys,
          alt: 'My Boys - 2024',
          desc_1: 'A study of my boys, Edward and Alphonse',
          desc_2: 'Modeled and rendered in Blender.'},
          {src: p,
          alt: 'Assortment of Phantoms - 2021',
          desc_1: 'Phantom creatures created for The Phantom Keeper.',
          desc_2: 'Modeled, rigged, and animated in Blender. Rendered in Unity.'},
     ]
          const images_col_2 = [
          {src: dawn,
          alt: 'Villager Dawn - 2025',
          desc_1: 'Dawn from the Pokemon Franchise in an Animal Crossing style.',
          desc_2: 'Modeled, rigged, and animated in Blender. Rendered in Unity.'}, 
          {src: star,
          alt: 'Star the Farmer - 2024',
          desc_1: 'A 3D representation of my Stardew Valley farmer - just for fun!',
          desc_2: 'Modeled and rendered in Blender. Shader design done in Blender.'}, 
          {src: me,
          alt: 'Self-Portrait - 2024',
          desc_1: 'A simple self-portrait bust.',
          desc_2: 'Modeled and rendered in Blender.'}, 
     ]
          const images_col_3 = [ 
          {src: barmer,
          alt: 'Barmer - 2025',
          desc_1: 'Character for unannounced mobile game.',
          desc_2: 'Modeled, rigged, and rendered in Blender.'},
          {src: s,
          alt: 'Silvia (Character by ) - 2024',
          desc_1: 'Created for ArtFight 2024. Character design by @JamJuce',
          desc_2: 'Modeled, rigged, animated, and rendered in Blender.'},
     ]

  return (
     <>
     <Menu></Menu>
     <div className='description'>Claire has worked as the primary 3D artist for all projects released by Pine Drake Games,
          of which she is also a co-founder. She also served as a professional 3D artist at 1st Playable Productions on projects
          such as Cooking Mama: Cookstar and Disney: Snaps!
     </div>
     <div className='row'>
          <div className='column'>
               {images_col_1.map(function(img) {
                    return (
                    <Spin>
                    <Popup trigger={
                         <button className='button'>
                              <img src={img.src} className="gallery-item" alt={img.alt}></img>
                         </button>} 
                         modal nested>
                    {close => (
                         <div className='modal'>
                         <button className='close' onClick={close}>
                              &#10008;
                         </button>
                         <div className='header'>{img.alt}</div>
                         <img src={img.src} className='img'></img>
                         <div className='content'>
                              {' '}
                              {img.desc_1}<br />
                              {img.desc_2}
                         </div>
                    </div>
                    )}
                    </Popup>
                    </Spin>
                    )
               })}
          </div>
          <div className='column'>
               {images_col_2.map(function(img) {
                    return (
                    <Spin>
                    <Popup trigger={
                         <button className='button'>
                              <img src={img.src} className="gallery-item" alt={img.alt}></img>
                         </button>} 
                         modal nested>
                    {close => (
                         <div className='modal'>
                         <button className='close' onClick={close}>
                              &#10008;
                         </button>
                         <div className='header'>{img.alt}</div>
                         <img src={img.src} className='img'></img>
                         <div className='content'>
                              {' '}
                              {img.desc_1}<br />
                              {img.desc_2}
                         </div>
                    </div>
                    )}
                    </Popup>
                    </Spin>
                    )
               })}
          </div>
          <div className='column'>
              {images_col_3.map(function(img) {
                    return (
                    <Spin>
                    <Popup trigger={
                         <button className='button'>
                              <img src={img.src} className="gallery-item" alt={img.alt}></img>
                         </button>} 
                         modal nested>
                    {close => (
                         <div className='modal'>
                         <button className='close' onClick={close}>
                              &#10008;
                         </button>
                         <div className='header'>{img.alt}</div>
                         <img src={img.src} className='img'></img>
                         <div className='content'>
                              {' '}
                              {img.desc_1}<br />
                              {img.desc_2}
                         </div>
                    </div>
                    )}
                    </Popup>
                    </Spin>
                    )
               })}
          </div>
     </div>
    </>
  );
}