import React from 'react'
import SEOElement from './SEOElement'


const upperText="Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo."

const lowerText="Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]"

const buttonText="Rozwiń"


const SEOFrame = () => {
  return (
    <div className="bg-black w-[1200px] h-[185px] flex justify-between">
        <SEOElement upperText={upperText} lowerText={lowerText} buttonText={buttonText}/>
        <SEOElement upperText={upperText} lowerText={lowerText} buttonText={buttonText}/>
      
    </div>
  )
}

export default SEOFrame
