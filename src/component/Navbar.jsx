import React, { useEffect, useState } from 'react';
import './Navbar.css';
import bars from "../img/bars.png"
import close from "../img/close.png"
import github from "../img/Git.png"
import email from "../img/email.png"
import instagram from "../img/Instagram.png"
import logo from "../img/logo.png"

const Navbar = () => {


    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        };

        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        }
    }, [])

    return (

        <nav className='navbar'>
            <div className='logo'>
                 <img src={logo}/> 

            </div>
            {(toggleMenu || screenWidth > 1024) && (
                <ul className='list'>
                    <li className='links'>
                        <a href="#about">About</a>
                    </li>
                    <li className='links'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='links'>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='links menu_link'>
                        <a href="#contact">Github</a>
                    </li>
                    <li className='links menu_link'>
                        <a href="#contact">Instagram</a>
                    </li>
                    <li className='links menu_link'>
                        <a href="#contact">Email</a>
                    </li>
                </ul>
            )}
            <div className='menuIcons'>
                {toggleMenu ? (
                    <img src={close}
                        className="menu__icon close"
                        onClick={() => setToggleMenu(false)}
                        alt=""
                    />
                ) : (
                    <img src={bars}
                        className="menu__icon"
                        onClick={() => setToggleMenu(true)}
                        alt=""
                    />
                )}
            </div>
            <div className='navbarSocials'>
                <div className='navbarGithub'>
                    <img src={github} alt="github" />
                    <p>Github</p>
                </div>
                <div className='navbarInstagram'>
                    <img src={instagram} alt="instagram" />
                    <p>Instagram</p>
                </div>
                <div className='navbarEmail'>
                    <img src={email} alt="github" />
                    <p>Email</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar