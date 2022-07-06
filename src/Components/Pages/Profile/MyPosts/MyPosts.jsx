import React from "react";
import { Post } from "../Post/Post";

import classes from "./MyPosts.module.css"

export const MyPosts = ({data}) => {

    const Posts = data.map((item) => {
        return <Post {...item}/>
    })
    
    return (
        <div className={classes.wrapper}>
            <form>
                <textarea className={classes.input} placeholder="Новый пост..." type="text" />
                <button>ADD</button>
            </form>
            <div className={classes.posts}>
                {Posts}
            </div>
        </div>
    )
} 