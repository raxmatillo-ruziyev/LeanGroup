import React from 'react'
import './Avto.scss'
import avto2 from '../../assets/avto2.png'
import avto3 from '../../assets/avto3.png'
const Avto = () => {
  return (
    <>
     <div className="avto">
        <h1 className="avtoTitle">Получить подробную <span> информацию</span></h1>
        <p className="avtoText">Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
        <ul className="avtoList">
            <li className="avtoItem">
                <img src={avto2} alt="" />
                <input type="text" placeholder='Ваше имя' />
            </li>
            <li className="avtoItem">
                <img src={avto3} alt="" />
                <input type="number" placeholder='+375 (29) 0000000' />
            </li>
            
        </ul>
      <textarea name="" id="" className='avtoInput' placeholder='Комментарий'></textarea> <br />
        <button className='avtoBtn'>Получить информацию</button>
     </div>
    </>
  )
}

export default Avto
