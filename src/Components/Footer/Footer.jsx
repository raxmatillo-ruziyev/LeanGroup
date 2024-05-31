import React from 'react'
import './Footer.scss'
import footer1 from '../../assets/Navbar.png'
import footer2 from '../../assets/footer2.png'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footercha">
            <img src={footer1} alt="" />
            <img src={footer2} alt="" />
        </div>
        <hr />
            <div className="footerBox">
                <div className="footerLeft">
                    <ul className="footerList">
                        <li className="footerItem">
                            <h1 className="footerTitle">Продукция</h1>
                            <br />
                            <h2 className="footerSubtitle">Ламинатные тубы</h2>
                            <br />
                            <h2 className="footerSubtitle">Экструзионные тубы</h2>
                            <br />
                            <h2 className="footerSubtitle">Другая упаковка</h2>
                        </li>
                        <li className="footerItem">
                            <h1 className="footerTitle">Компания</h1>
                            <br />
                            <h2 className="footerSubtitle">О нас</h2>
                            <br />
                            <h2 className="footerSubtitle">Наша команда</h2>
                            <br />
                            <h2 className="footerSubtitle"> Сертификаты</h2>
                        </li>
                        <li className="footerItem">
                            <h1 className="footerTitle">Разделы</h1>
                            <br />
                            <h2 className="footerSubtitle">Контакты</h2>
                            <br />
                            <h2 className="footerSubtitle">Новости</h2>
                            <br />
                            <h2 className="footerSubtitle"> Вакансии</h2>
                        </li>
                    </ul>
                </div>
                <div className="footerRight">
                    <ul className="footerRightList">
                        <li className="footerRightItem">
                            <h2 className="RightTitle">Беларусь</h2><br />
                            <h2 className="RightSubtitle">+375 (17) 270 53 77</h2><br/>
                            <h2 className="RightSubtitle">+375 (17) 270 53 78</h2><br/>
                        </li>
                        <li className="footerRightItem">
                            <h2 className="RightTitle">Европа</h2><br />
                            <h2 className="RightSubtitle">+48 73 1111 044</h2><br/>
                           
                        </li>
                    </ul>
                    <ul className="footerRightList">
                        <li className="footerRightItem">
                            <h2 className="RightTitle">Москва</h2><br />
                            <h2 className="RightSubtitle">+7 (495) 280 73 44</h2><br/>
                            <h2 className="RightSubtitle">+7 (495) 280 73 44</h2><br/>
                        </li>
                        <li className="footerRightItem">
                            <h2 className="RightTitle">Екатеринбург</h2><br />
                            <h2 className="RightSubtitle">+7 (495) 280 73 44</h2><br/>
                           
                        </li>
                    </ul>
                </div>
            </div>
            <p className="textcha">© 2022 Leangroup. All Rights Reserved.
Разработка и продвижение сайтов SkyWeb.by</p>
      </div>

    </>
  )
}

export default Footer
