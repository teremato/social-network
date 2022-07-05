import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css"

export const NavBar = () => {

    const links = [
        {link: "/profile", name: "Profile"},
        {link: "/messages", name: "Messages"},
        {link: "/news", name: "News"},
        {link: "/music", name: "Music"},
        {link: "/settings", name: "Settings"}
    ]

    return (
        <div className={classes.nav_bar}>
            <nav className={classes.container}>
                {
                    links.map((item) => {
                        return(
                            <div className={classes.nav_link}>
                                <NavLink to={item.link} className={(navData) => navData.isActive ? classes.active : ""}>{item.name}</NavLink>
                            </div>
                        )
                    })
                }
            </nav>
        </div>
    )
}