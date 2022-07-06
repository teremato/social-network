import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";

import classes from "./Profile.module.css"

export const Profile = () => {

    const banner = "https://karatu.ru/wp-content/uploads/2021/12/834893489438834894894343.jpg"

    const users = [
        {name: "Anton", text: "Hello!", likes: 23, userImg: "https://s1.1zoom.ru/big0/36/Canine_tooth_fangs_509087.jpg"},
        {name: "Evgeniy", text: "How are You ?", likes: 43, userImg: "https://img-fotki.yandex.ru/get/6719/137106206.441/0_e8a2d_837b7722_orig.jpg"},
        {name: "Egor", text: "Go to Drunk!", likes: 23, userImg: "https://attuale.ru/wp-content/uploads/2018/03/zapret-na-vvoz-plemennyih-sviney-iz-germanii-snimet-v-sentyabre-rosselhoznadzor.jpg"},
        {name: "Veronika", text: "Cats, MAY!", likes: 43, userImg: "https://fb.ru/media/i/3/6/6/5/3/7/i/366537.jpg"}
    ]

    return (
        <div className={classes.profile}>
            <img className={classes.banner} src={banner} alt="banner"></img>
            <div>AVA+DESCRIPTON</div>
            <MyPosts data={users}/>
        </div>
    )
}