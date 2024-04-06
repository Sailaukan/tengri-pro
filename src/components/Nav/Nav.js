import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav className={classes.nav}>
            <NavLink to="/content" className={classes.pages}>
                <div className={`${classes.item} ${classes.active}`}>News</div>
            </NavLink>
            <NavLink to="/tengris" className={classes.pages}>
                <div className={classes.item}>Tengris</div>
            </NavLink>
            <NavLink to="/profile" className={classes.pages}>
                <div className={classes.item}>Profile</div>
            </NavLink>
        </nav>
    )
}

export default Nav;