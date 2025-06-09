import { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import './Home.css'

export default function Home() 
{
  return (
    <>
    <Menu></Menu>
    <Hero></Hero>
    </>
  );
}
