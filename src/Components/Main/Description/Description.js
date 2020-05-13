import React from "react";
import style from "./Description.module.css";
import marker from "../../assets/images/Main/marker.svg";
import facebook from "../../assets/images/Main/social_networks/facebook.svg";
import instagram from "../../assets/images/Main/social_networks/instagram.svg";
import twitter from "../../assets/images/Main/social_networks/twitter.svg";
import youtube from "../../assets/images/Main/social_networks/youtube.svg";

function Description() {
    return (
        <div>
            <section className={style.firstSection}>
                <span>Организация семинаров и коучингов под ключ</span>
            </section>
            <section className={style.secondSection}>
                <span>Оставьте заявку до 10 октября и получите в порадок кейтеринг на 10 персон</span>
            </section>
            <section className={style.thirdSection}>
                <div className={style.list}><img src={marker} alt="marker"/> <span>Конференции </span></div>
                <div className={style.list}><img src={marker} alt="marker"/>Тимбилдинги и корпоративы</div>
                <div className={style.list}><img src={marker} alt="marker"/>Бизнес-завтраки</div>
            </section>
            <button className={style.submitBtn}><span> Оставить заявку </span></button>
            <section className={style.socialNetworks}>
                <div className={style.icon}><img src={facebook} alt="facebook"/></div>
                <div className={style.icon}><img src={twitter} alt="twitter"/></div>
                <div className={style.icon}><img src={instagram} alt="instagram"/></div>
                <div className={style.icon}><img src={youtube} alt="youtube"/></div>
            </section>
            <div className={style.lineDescription}/>
        </div>
    );
}

export default Description;
