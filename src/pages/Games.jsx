import { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import './Home.css'

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Games() 
{
  return (
    <>
      <Menu></Menu>
    
      <VerticalTimeline>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2025'>
          <h3 className='vertical-timeline-element-title'>???</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2022'>
          <h3 className='vertical-timeline-element-title'>Department of the Devil</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2021'>
          <h3 className='vertical-timeline-element-title'>The Phantom Keeper</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2020'>
          <h3 className='vertical-timeline-element-title'>Apotheker</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2020'>
          <h3 className='vertical-timeline-element-title'>Cooking Mama: Cookstar</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2019'>
          <h3 className='vertical-timeline-element-title'>Disney: Snaps!</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date='2018'>
          <h3 className='vertical-timeline-element-title'>Shikigami</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </>);
}