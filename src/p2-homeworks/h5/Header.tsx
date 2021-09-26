import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Routes"

function Header() {
    return (
        <div className={s.navWrapper}>
            <div className={s.slideNavBar}>
                <span className={s.navLinkItem}><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>preJunior</NavLink></span>
                <span className={s.navLinkItem}><NavLink to={PATH.Junior} activeClassName={s.activeLink}>junior</NavLink></span>
                <span className={s.navLinkItem}><NavLink to={PATH.JuniorPlus} activeClassName={s.activeLink}>junior+</NavLink></span>
            </div>

        </div>
    )
}

export default Header
