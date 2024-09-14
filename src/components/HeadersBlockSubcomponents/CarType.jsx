import React from 'react'

const CarType = ({ text, colorName, onClick }) => {
  return (
    <button onClick={onClick} className={ "text-" + colorName + " font-robotoFlex text-[15px] font-semibold leading-[22.5px] tracking-[-0.02em] "}>
        {text}
    </button>
  )
}

export default CarType
