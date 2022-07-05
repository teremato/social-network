import React from "react";

import classes from "./Header.module.css"

export const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}></div>
                <div className={classes.logo_text}>ToGame</div>
            </div>
        </div>
    )
}