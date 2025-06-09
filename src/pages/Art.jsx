import { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu'
import './Art.css'
import { Spin } from '../assets/Spin'
import retro from '../assets/art/FinalAnimation.gif'
import dawn from '../assets/art/dawn_gif.gif'
import s from '../assets/art/FinalAnimation_S.gif'
import profilepic from '../assets/claire2_copy.png'

export default function Art() 
{
     const images_col_1 = [ 
          {src: retro,
          alt: 'Retro (Character by TriangleMom) - 2024' },
          {src: profilepic,
          alt: 'Profile Picture' },
          {src: profilepic,
          alt: 'Profile Picture' },
     ]
          const images_col_2 = [
          {src: dawn,
          alt: 'Profile Picture' }, 
          {src: profilepic,
          alt: 'Profile Picture' },
          {src: profilepic,
          alt: 'Profile Picture' },
     ]
          const images_col_3 = [ 
          {src: s,
          alt: 'Profile Picture' },
          {src: profilepic,
          alt: 'Profile Picture' },
          {src: profilepic,
          alt: 'Profile Picture' },
     ]

  return (
     <>
     <Menu></Menu>
     <div className='description'>Claire has worked as the primary 3D artist for all projects released by Pine Drake Games,
          of which she is also a co-founder. She also was a professional 3D artist at First Playable Productions on projects
          such as Cooking Mama: Cookstar and Disney: Snaps!
     </div>
     <div className='row'>
          <div className='column'>
               {images_col_1.map(function(img) {
                    return (
                    <Spin>
                    <a href={img.src}>
                    <img src={img.src} className="gallery-item" alt={img.alt}></img>
                    </a> </Spin>
                    )
               })}
          </div>
          <div className='column'>
               {images_col_2.map(function(img) {
                    return (
                    <Spin>
                    <a href={img.src}>
                    <img src={img.src} className="gallery-item" alt={img.alt}></img>
                    </a> </Spin>
                    )
               })}
          </div>
          <div className='column'>
              {images_col_3.map(function(img) {
                    return (
                    <Spin>
                    <a href={img.src}>
                    <img src={img.src} className="gallery-item" alt={img.alt}></img>
                    </a> </Spin>
                    )
               })}
          </div>
     </div>
    </>
  );
}