import React from "react";
import style from "./Slider.module.css";
import slider_right from "../../../assets/images/Cases/slider_right.svg";
import slider_left from "../../../assets/images/Cases/slider_left.svg";
import photo_1 from "../../../assets/images/Cases/Photos/photo_1.png";
import photo_2 from "../../../assets/images/Cases/Photos/photo_2.png";
import photo_3 from "../../../assets/images/Cases/Photos/photo_3.png";
import photo_4 from "../../../assets/images/Cases/Photos/photo_4.png";

function Slider() {
    return (<>
            <img src={slider_right} className={style.slider_right} alt=""/>
            <img src={slider_left} className={style.slider_left} alt=""/>
            <section className={style.photos}>
                <img className={style.photo_1} src={photo_1} alt=""/>
                <div className={style.layer}><span> Конференция группы компаний Nexans Russia</span></div>
                <img className={style.photo_2} src={photo_2} alt=""/>
                <img className={style.photo_4} src={photo_4} alt=""/>
                <img className={style.photo_3} src={photo_3} alt=""/>
            </section>
        </>
    );
}

export default Slider;
