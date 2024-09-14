import React from 'react'
import Images from './GalleryBlockSubcomponents.jsx/Images'
import Navigation from './GalleryBlockSubcomponents.jsx/Navigation'

const GalleryBlock = () => {
  return (
    <div  className="bg-MyGrey w-[1440px] h-[678px] p-[88px] px-[88px] 
    gap-0 border-t border-t-[1px]  overflow-hidden flex flex-col items-center justify-between
    ">
      <div className="flex justify-center">
        <Images /> 
      </div>
        <Navigation />
    </div>
  )
}

export default GalleryBlock
