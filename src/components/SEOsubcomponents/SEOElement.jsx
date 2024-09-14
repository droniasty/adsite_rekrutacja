import React from 'react'

const SEOElement = ({ upperText, lowerText, buttonText }) => {
  return (
    <div className="bg-black w-[576px] h-[185px]">
        <div className="w-[576px] h-[76px] 
            text-white font-bebas text-[25px] font-normal 
            leading-[37.5px] tracking-[-0.03em] text-left">
            {upperText}
        </div>
        <div className="w-[576px] h-[109px] 
            text-white font-robotoCondensed text-[14px] font-normal 
            leading-[21px] text-left">
            {lowerText}
        </div>
        <button className="text-white w-[58.73px] h-[27px] pb-[6px] gap-[6px] 
        border-b-[1.5px] border-b-MyWhite ">
            {buttonText}
        </button>
    </div>
  )
}

export default SEOElement
