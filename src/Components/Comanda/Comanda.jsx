import React from 'react'
import './Comanda.scss'
import comanda1 from '../../assets/comanda1.png'
import comanda2 from '../../assets/comanda2.png'
import comanda3 from '../../assets/comanda3.png'
import comanda4 from '../../assets/comanda4.png'
import comanda5 from '../../assets/comanda5.png'
const Comanda = () => {
  return (
    <>
     <div className="comanda">
        <h1 className="comandaTitle">Наша <span>команда</span></h1>
        <ul className="comandaList">
<li className="comandaItem">
    <img src={comanda1} alt="" />
    <h2 className="comandaSubtitle">Войнич Дарья</h2>
    <p className="comandaText">Заместитель директора по продажам</p>
    <a className='comandaLink' href="tel:+375 (17) 270-53-77 (317)">+375 (17) 270-53-77 (317)</a>
</li>
<li className="comandaItem">
    <img className='comandaImg' src={comanda2} alt="" />
    <h2 className="comandaSubtitle">Мисько Екатерина</h2>
    <p className="comandaText">Начальник отдела сопровождения</p>
    <a   className='comandaLink'href="tel:+375 (17) 270-53-77 (317)">+375 (17) 270-53-77 (115) <br />
 +375 29 112-73-48</a><br />
 <a  className='comandaLink' href="mailto">k.melnichenko@leangroup.by</a>
</li>
<li className="comandaItem">
    <img className='comandaImg'  src={comanda3} alt="" />
    <h2 className="comandaSubtitle">Дмитроченко Дмитрий</h2>
    <p className="comandaText">Начальник отдела допечатной подготовки</p>
    <a   className='comandaLink'href="tel:+375 (17) 270-53-77 (317)">+375 (17) 270-53-77 (115) <br />
 +375 29 112-73-48</a> <br />
 <a  className='comandaLink' href="mailto">dmitrochenko@leangroup.by</a>
</li>
<li className="comandaItem">
    <img src={comanda4} alt="" />
    <h2 className="comandaSubtitle">Антух Евгений</h2>
    <p className="comandaText">Начальник отдела снабжения</p>
    <a   className='comandaLink'href="tel:+375 (17) 270-53-77 (317)">+375 (17) 270-53-77 (115) <br />
 +375 29 112-73-48</a><br />
 <a  className='comandaLink' href="mailto">j.antuh@leangroup.by</a>
</li>
<li className="comandaItem">
    <img src={comanda5} alt="" />
    <h2 className="comandaSubtitle">Мисник Елена</h2>
    <p className="comandaText">Специалист по работе с клиентами</p>
    <a   className='comandaLink'href="tel:+375 (17) 270-53-77 (317)">+375 (17) 270-53-77 (115) <br />
 +375 29 112-73-48</a><br />
 <a  className='comandaLink' href="mailto">e.misnik@leangroup.by</a>
</li>



        </ul>
        <button className='comandaBtn'>Наша команда</button>
     </div>
    </>
  )
}

export default Comanda
