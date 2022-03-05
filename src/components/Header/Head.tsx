import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

type HeaderType = {
    isAuth: boolean
    login: string
}

function Header(props: HeaderType) {
    return (
        <header className={s.header}>
            <img
                src='https://www.pikpng.com/pngl/b/548-5488223_discover-ideas-about-henna-tattoo-stencils-samurai-logo.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <span>{props.login}</span>
                    :<NavLink to={'/Login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;