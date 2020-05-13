import React from "react";
import style from "./FooterLinks.module.css";
import master_card from "../../../assets/images/Footer/master_card.svg";
import visa from "../../../assets/images/Footer/visa.svg";
import pay_pal from "../../../assets/images/Footer/pay_pal.svg";

function FooterLinks() {
    return (<>
            <div>
                <div className={style.job}>Работа у нас</div>
                <div className={style.familiarity}>День открытых дверей </div>
                <div className={style.charity}>Благотворительнось</div>
            </div>
            <div>
                <img src={master_card} className={style.master_card} alt="master_card"/>
                <img src={visa} className={style.visa} alt="visa"/>
                <img src={pay_pal} className={style.pay_pal} alt="pay_pal"/>
            </div>
            <div className={style.email}>hello@eventbiz.pro</div>
            <button className={style.callBtn}><span>Заказать звонок</span></button>
            <div className={style.phone}>+375 (29) 500-36-00</div>
        </>
    );
}

export default FooterLinks;
