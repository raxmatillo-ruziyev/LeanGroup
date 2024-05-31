import React from 'react'
import './Service.scss'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
import service5 from '../../assets/service5.png'
const Service = () => {
  return (
    <>
   <div className="service">
    <h1 className="serviceTitle">Наша <span>продукция</span></h1>
    <div className="serviceBox">
        <button className='serviceBtn'>Ламинатные тубы</button>
        <button className='serviveButton'>Экструзионные тубы</button>
        <button className='serviceBtn'>Другая упаковка</button>
    </div>
    <div className="serviceSlide">
   <img src={service1} alt="" />
   <img src={service2} alt="" />
   <img src={service3} alt="" />
   <img src={service4} alt="" />
   <img src={service5} alt="" />
    </div>
    <button className='serviceBtncha'>Перейти в каталог</button>
   </div>

    </>
  )
}

export default Service
