import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Messages.module.css"

const dialogue = [
    {id: 1, name: "Evgeniy", message: "Go to Piter"},
    {id: 2, name: "Veronica", message: "Go to Walk"},
    {id: 3, name: "Anna", message: "Where is evgeniy"},
    {id: 4, name: "Egor", message: "Go to Drunk"},
    {id: 5, name: "Natalia", message: "Where a u"}

]

const DialogueUsers = (props) => {

    let path = "/messages/" + props.id

    return (
        <NavLink to={path}  className={classes.user}>{props.name}</NavLink>
    )
}
const DialogueMessages = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Messages = () => {

    return (
        <div className={classes.dialogue}>
            <div className={classes.users}>
                {
                    dialogue.map((item) => {
                        return(
                            <DialogueUsers {...item}/>
                        )
                    })
                }
            </div>
            
            <div className={classes.messages}>
                {
                    dialogue.map((item) => {
                        return(
                            <DialogueMessages {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}