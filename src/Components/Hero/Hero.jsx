import React from 'react'
import './Hero.scss'
import hero2 from '../../assets/Hero2.png'
import hero3 from '../../assets/Hero3.png'
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroBox">
            <h2 className="heroTitle">LEANGROUP - тубы и этикетки</h2>
            <h1 className="heroSubtitle">Ламинатные тубы</h1>
            <p className="heroText">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
            <button className='heroBtn'>Каталог</button>
            
           


        </div>
          <div className='hero2'>  <img  src={hero2} alt="" /></div>
       <div className='hero3'> <img  src={hero3} alt="" /></div>
      </div>
    </>
  )
}

export default Hero
