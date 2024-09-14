import React from 'react'
import ImageRed from '../../assets/carImages/ImagesRed.png'
import ImageBlack from '../../assets/carImages/ImagesBlack.png'
import ImageClose from '../../assets/carImages/ImagesClose.png'


const Images = () => {
  return (
    <div className="w-[1264px] h-[446px] flex gap-[64px] ">
        <img src={ImageRed}  alt="Description" className="w-[600px] h-[446px]"/>
        <img src={ImageBlack} alt="Description" className="w-[600px] h-[446px]"/>
        <img src={ImageClose} alt="Description" className="w-[600px] h-[446px]"/>
      
    </div>
  )
}

export default Images
