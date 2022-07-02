import React from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'


function Header() {

    return (

        <div className={style.header}>
            <div className={style.nav}>
                <div className={style.navBar} >
                    <NavLink className={style.link} activeClassName={style.active} to='/pre-junior'>PreJunior</NavLink>
                    <NavLink className={style.link} activeClassName={style.active} to='/junior'>Junior</NavLink>
                    <NavLink className={style.link} activeClassName={style.active} to='/juniorplus'>Junior+</NavLink>
                </div>
                <button className={style.button}>Нажми на меня</button>
            </div>
        </div>
    )
}

export default Header
