import React from "react";
import style from "./Contacts.module.css";
import marker from "../../assets/images/Contacts/marker.svg";
import twitter from "../../assets/images/Contacts/social_networks/twitter.svg";
import youtube from "../../assets/images/Contacts/social_networks/youtube.svg";
import facebook from "../../assets/images/Contacts/social_networks/facebook.svg";
import instagram from "../../assets/images/Contacts/social_networks/instagram.svg";

function Contacts() {
    return (
        <div className={style.wrapperContacts}>
            <div className={style.wrapperAddress}>
                <div className={style.firstSection}><span className={style.eventBiz}>EventBiz</span><span
                    className={style.pro}>Pro</span>
                    <span className={style.seminars}>Организация семинаров</span>
                </div>
                <div className={style.contactsList}>
                    <div><img src={marker} className={style.marker} alt=""/> <span className={style.titles}>г. Минск ул. Уманская д.3</span>
                    </div>
                    <div><img src={marker} className={style.marker} alt=""/> <span className={style.titles}>+375 (29) 500-36-00</span>
                    </div>
                    <div><img src={marker} className={style.marker} alt=""/> <span
                        className={style.titles}>hello@eventbiz.pro</span></div>
                    <div><img src={marker} className={style.marker_1} alt=""/> <span className={style.titles_1}>Пн Пт: 10:00 - 19:00
        <br/>Сб: 10:00 - 17:00 <br/> Вс: выходной</span></div>
                    <div className={style.socialNetworks}>
                        <div className={style.icon}><img src={facebook} alt="facebook"/></div>
                        <div className={style.icon}><img src={twitter} alt="twitter"/></div>
                        <div className={style.icon}><img src={instagram} alt="instagram"/></div>
                        <div className={style.icon}><img src={youtube} alt="youtube"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts
