import React from "react";

import classes from "./Post.module.css"

export const Post = (props) => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.user}>
                <img className={classes.icon} src={props.userImg} alt="" />
                <div className={classes.name}>{props.name}</div>
            </div>
            <div className={classes.text}>{props.text}</div>
            <div className={classes.like}>❤ {props.likes}</div>
        </div>
    )
}