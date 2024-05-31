import React from 'react'
import './Navbar.scss'
import navbar from '../../assets/Navbar.png'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="navbarList">
                    <li className="navbarItem"> <img src={navbar} alt="" /></li>
                    <li className="navbarItem">
                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Продукция</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>

                        <hr className="navbarHr" />

                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Сертификаты</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>

                        <hr className="navbarHr" />

                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Наша команда</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>
                        <hr className="navbarHr" />
                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">О нас</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>
                        <hr className="navbarHr" />
                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Новости</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>
                        <hr className="navbarHr" />
                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Вакансии</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>
                        <hr className="navbarHr" />

                        <div class="dropdown">
                            <a href="" className="dropbtn" id="navbarLink">Контакты</a>
                            <div class="dropdown-content">
                                <a href="#" id="navbarLink">Ламинатные тубы</a>
                                <a href="#" id="navbarLink">Экструзионные тубы</a>
                                <a href="#" id="navbarLink">Другая упаковка</a>
                            </div>
                        </div>
                    </li>
                    <li className="navbarItem">
                        <h1 className="navbarTitle">RU</h1>
                        <hr className="navbarHr" />
                        <h1 className="navbarTitle">EN</h1>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar
