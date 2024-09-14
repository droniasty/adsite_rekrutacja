import React from 'react'
import CarSpot from './assets/images/my-image.png';

const Navigations = () => {
  return (
    <div className="w-[1440px] h-[79px] gap-0 flex justify-between items-center justify-center">
      <div className="w-[1200px] h-[47px] flex justify-between items-center gap-0 mx-auto">
      <div className="w-[300px] h-[29.58px]">
        <img src={CarSpot} alt="logo"  className="w-full h-full object-contain"/>
      </div>
      <div className="w-[144px] h-[24px] flex gap-[24px]">
        <p className="w-[91px] h-[24px] font-robotoFlex text-[15px] font-normal leading-[24px] text-center">
          Galeria zdjęć
        </p>
        <p className="font-robotoFlex text-[15px] font-normal leading-[24px] text-center">
          FaQ
        </p>
      </div>
      <button className="w-[148px] h-[47px] gap-[8px] bg-TextBlue text-MyGrey rounded-md">
            Zobacz zdjęcia
      </button>
      </div>
      
    </div>
  )
}

export default Navigations
