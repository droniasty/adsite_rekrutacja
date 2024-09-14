import React from 'react'
import Navigations from './Navigations'
import Hero from './Hero'

const HeroNavigations = () => {
  return (
    <div className="bg-[url('/BackgroundImage.png')] bg-cover bg-center  w-[1440px] h-[904px]">
      <Navigations />
      <Hero />
    </div>
  )
}

export default HeroNavigations
