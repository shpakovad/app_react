import React from "react";
import style from "./Header.module.css";
import phone from "../assets/images/Main/phone.svg";
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <header className={style.header}>
            <div className={style.description}>
                <div className={style.event}>EventBiz<span>Pro</span></div>
                <div className={style.seminars}>Организация семинаров</div>
            </div>
            <nav className={style.menu}>
                <NavLink to={"/home"} className={style.link}>Главная</NavLink>
                <NavLink to={"/news"} className={style.link}>Новости</NavLink>
                <NavLink to={"/login"} className={style.link}>Профиль</NavLink>
            </nav>
            <div className={style.wrapperPhone}>
                <img src={phone} alt=""/>
            </div>
        </header>
    );
}

export default Header;
