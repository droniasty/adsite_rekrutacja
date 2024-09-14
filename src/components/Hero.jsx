import React from 'react'


const Hero = () => {
  return (
    <div className="w-[1440px] h-[825px] py-[120px] px-0 gap-[48px] grid place-items-center">
  
      <div className="w-[1200px] h-[343px] gap-48 -mt-[220px]">
          <div className="font-bebas text-custom-size font-normal leading-custom-line-height tracking-custom-spacing text-left">
            <p>Sprzedajemy samochody</p>
            z europy
          </div>
          <div className="font-robotoCondensed text-[24px] font-normal 
          leading-[33px] tracking-[0.02em] text-left
          mb-[32px] mt-[48px]">
            <p>Kup komfortowy pojazd, aby każda podróż </p> 
            <p>była wyjątkowym przeżyciem.</p>
          </div>
          <div className="flex gap-[16px]">
          <button className="w-[148px] h-[47px] gap-[8px] bg-TextBlue text-MyGrey rounded-md">
            Zobacz zdjęcia
          </button>
          <button className="w-[148px] h-[47px] gap-[8px] bg-MyGrey text-TextBlue rounded-md border border-TextBlue">
            Zadzwoń do nas
          </button>
          </div>
      </div>
      
    </div>
  )
}

export default Hero
