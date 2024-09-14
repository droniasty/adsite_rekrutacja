import React from 'react'
import CarType from './HeadersBlockSubcomponents/CarType'
import { useState } from 'react'


const HeadersBlock = () => {
  const [selectedCarType, setSelectedCarType] = useState("Samochody osobowe")

  return (
    <div className="bg-MyGrey w-[1440px] min-h-[207px] pt-[80px] gap-0">
      <div className="w-[1264px] min-h-[127px] gap-[24px] mx-auto">
        <div className="text-TextBlue font-robotoCondensed text-[21.5px] font-normal leading-[32.25px] ">
          <p>Prezentacja firmy</p>
        </div>
        <div className="font-bebas text-[40px] font-normal leading-[48px] text-left">
          <p>ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</p>
        </div>
        <div className="flex gap-[16px]">
        <CarType 
          text="Samochody osobowe" 
          colorName={selectedCarType === "Samochody osobowe" ? "TextBlue" : "TextBlack"} 
          onClick={() => setSelectedCarType("Samochody osobowe")}
        />
        <CarType 
          text="Samochody dostawcze" 
          colorName={selectedCarType === "Samochody dostawcze" ? "TextBlue" : "TextBlack"} 
          onClick={() => setSelectedCarType("Samochody dostawcze")}
        />
        </div>
       </div>
    </div>
  )
}

export default HeadersBlock
