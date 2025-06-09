import { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu'
import './Art.css'
import { Spin } from '../assets/Spin'

export default function Art() 
{
     const images_col_1 = [ 
          {src: 'src/assets/art/FinalAnimation.gif',
          alt: 'Retro (Character by TriangleMom) - 2024' },
          {src: 'src/assets/claire2_copy.png',
          alt: 'Profile Picture' },
          {src: 'src/assets/claire2_copy.png',
          alt: 'Profile Picture' },
     ]
          const images_col_2 = [
          {src: 'src/assets/art/dawn_gif.gif',
          alt: 'Profile Picture' }, 
          {src: 'src/assets/claire2_copy.png',
          alt: 'Profile Picture' },
          {src: 'src/assets/claire2_copy.png',
          alt: 'Profile Picture' },
     ]
          const images_col_3 = [ 
          {src: 'src/assets/art/FinalAnimation_S.gif',
          alt: 'Profile Picture' },
          {src: 'src/assets/claire2_copy.png',
          alt: 'Profile Picture' },
          {src: 'src/assets/claire2_copy.png',
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