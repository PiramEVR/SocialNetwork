import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

function Navbar(props: any) {
    return (
        <nav className={s.nav}>
            <div >
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/Profile'>Profile</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink className={navData => navData.isActive ? s.active : s.item}  to='/Dialogs'>Messages</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink className={navData => navData.isActive ? s.active : s.item}  to='/News'>News</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink className={navData => navData.isActive ? s.active : s.item}  to='/Music'>Music</NavLink>
            </div>
            <div className={`${s.link} ${s.active}`}>
                <NavLink className={navData => navData.isActive ? s.active : s.item}  to='/Settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;