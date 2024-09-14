import { useState } from 'react'
import HeroNavigations from './components/HeroNavigations'
import HeadersBlock from './components/HeadersBlock'
import GalleryBlock from './components/GalleryBlock'
import SEO from './components/SEO'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroNavigations />
    <HeadersBlock />
    <GalleryBlock />
    <SEO />
    <Footer />
    </>
  )
}

export default App
