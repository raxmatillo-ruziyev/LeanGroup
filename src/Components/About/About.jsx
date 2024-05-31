import React from 'react'
import './About.scss'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import about3 from '../../assets/about3.png'
import about4 from '../../assets/about4.png'
import about5 from '../../assets/about5.png'





const About = () => {
  return (
    <>
    <div className="about">
        <h1 className="aboutTitle">Качество продукции подтверждают   <span>cертификаты</span> </h1>
        <div className="aboutSlide">
     <img src={about1} alt=""  />
     <img src={about2} alt=""  />
     <img src={about3} alt=""  />
     <img src={about4} alt=""  />
     <img src={about5} alt=""  />
        </div>
    </div>
    </>
  )
}

export default About
