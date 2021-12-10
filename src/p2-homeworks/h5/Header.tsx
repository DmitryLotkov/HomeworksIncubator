import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.wrapper}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.navLinkItem} activeClassName={s.activeLink}>preJunior</NavLink>
                <NavLink to={PATH.Junior} className={s.navLinkItem} activeClassName={s.activeLink}>junior</NavLink>
                <NavLink to={PATH.JuniorPlus} className={s.navLinkItem} activeClassName={s.activeLink}>junior+</NavLink>
                <div className={s.square}/>
        </div>
    )
}

export default Header
