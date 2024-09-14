import React from 'react'
import { useState } from 'react'
import { GoDot } from "react-icons/go";

const Navigation = () => {
  const [selected, setSelected] = useState(0)

  const handleClick = (index) => {
    setSelected(index)
    }

  const GenerateDot = (index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(index)}
        style={{ color: index === selected ? 'blue' : 'black' }}
      >
        <GoDot />
      </div>
    )
  }

  const dots = [0, 1, 2, 3, 4].map((index) => GenerateDot(index))


  return (
    <div className="w-[80px] h-[24px] flex space-x-4 flex justify-center">
        {dots}
    </div>
  )
}

export default Navigation
