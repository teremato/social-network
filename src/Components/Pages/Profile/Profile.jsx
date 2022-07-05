import React from "react";

import classes from "./Profile.module.css"

export const Profile = () => {

    const banner = "https://karatu.ru/wp-content/uploads/2021/12/834893489438834894894343.jpg"

    return (
        <div>
            <img className={classes.banner} src={banner} alt="banner"></img>
            <div>AVA+DESCRIPTON</div>
        </div>
    )
}