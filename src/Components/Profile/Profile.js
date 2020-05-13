import React from "react";
import style from "./Profile.module.css";
import user_photo from "../assets/images/Profile/user_photo.jpg";
import planet_1 from "../assets/images/Profile/planet_1.jpg";
import planet_2 from "../assets/images/Profile/planet_2.jpg";

function Profile() {
    return (
        <div className={style.wrapper}>
            <div className={style.userInfo}>
<img className={style.userPhoto} src={user_photo} alt=""/>
<div className={style.userData}>
<span>Name : Admin</span>
<span>Location : Minsk, Belarus</span>
</div>
            </div>
            <img className={style.planet_1} src={planet_1} alt=""/>
            <img className={style.planet_2} src={planet_2} alt=""/>
<div className={style.wrapperProfile}>
</div>
        </div>
    );
}

export default Profile;
