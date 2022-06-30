import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'


function Header() {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <div className={style.navBar}>
                    <NavLink className={style.link} to='/pre-junior'>PreJunior</NavLink>
                    <NavLink className={style.link} to='/junior'>Junior</NavLink>
                    <NavLink className={style.link} to='/juniorplus'>Junior+</NavLink>
                </div>
                <button className={style.button}>Нажми на меня </button>
            </div>
        </div>
    )
}

export default Header
