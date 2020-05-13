import React from "react";
import style from "./Gallery.module.css";
import Slider from "../Slider/Slider";


function Gallery() {
    return (<>
            <section className={style.menu}>
                <div className={style.wrapperLink_1}><span className={style.link_1}>Все мероприятия</span></div>
                <div className={style.wrapperLink_2}><span className={style.link}>Конференции</span></div>
                <div className={style.wrapperLink_3}><span className={style.link}>Бизнес завтраки</span></div>
                <div className={style.wrapperLink_4}><span className={style.link}>Коучинги и тренинги</span></div>
                <div className={style.wrapperLink_5}><span className={style.link}>Тимбилдинги и корпоративы</span>
                </div>
            </section>
            <div className={style.gallery}>
                <div className={style.wrapperCards}>
                    <div className={style.union}>
                        <div className={style.cards}>
                            <div className={style.borderLink}/>
                            <Slider/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
