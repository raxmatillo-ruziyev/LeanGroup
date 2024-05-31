import React from 'react'
import './Novisti.scss'
import novosti from '../../assets/novosti.png'
import novosti2 from '../../assets/novosti2.png'
import novosti3 from '../../assets/novosti3.png'
const Novosti = () => {
  return (
    <>
    <div className="novosti">
        <h1 className="novostiTitle">Новости</h1>
        <ul className="novostiList">
            <li className="novostiItem">
                <img src={novosti} alt=""  height={"228px"}/>
                <p className="novostiText">28.01.2022</p>
                <h2 className="novostiSubtitle">"ЛеанГрупп" призер EcoVadis!</h2>
            </li>
            <li className="novostiItem">
                <img src={novosti2} alt="" width={"360px"} />
                <p className="novostiText">21.01.2022</p>
                <h2 className="novostiSubtitle">"ЛеанГрупп" серебряный призер EcoVadis!</h2>
            </li>
            <li className="novostiItem">
                <img src={novosti3} alt=""width={"360px"}  />
                <p className="novostiText">16.12.2021</p>
                <h2 className="novostiSubtitle">Туба, как вид упаковки</h2>
            </li>
        </ul>
        <button className='novostiBtn'>Все новости</button>
    </div>
    </>
  )
}

export default Novosti
