import React from 'react'
import Careers from './Careers'
import Events from './Events'
import Hero from './Hero'
import Solutions from './Solutions/Solutions'
import TeamEssentials from './Solutions/TeamEssentials'
import CardsProps from './ThreeCards/CardsProps'
import Icons from './VideoComp/Icons'
import Join from './VideoComp/Join'
import Video from './VideoComp/Video'

const HomeScreen = () => {
  return (
    <div>
        <Hero />
        <Solutions />
        <Join />
        {/* <Video /> */}
        {/* <Icons /> */}
        <TeamEssentials />
        <CardsProps />
        <Events />
        <Careers />
    </div>
  )
}

export default HomeScreen