import { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import './CV.css'
import cv from '../assets/Claire_Thomas_CV_2025.pdf'

export default function CV() 
{
  return (
    <>
    <Menu></Menu>
    <div className='item'>
      <a href={cv} download={cv}><button>Download PDF</button></a>
    </div>
    <div className='item'>this is where i will put my CV</div>
    </>
  );
}