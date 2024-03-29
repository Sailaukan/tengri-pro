import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
    return(
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                Profile
            </div>
            <div className={classes.item}>
                Settings
            </div>
            <div className={classes.item}>
                Messages
            </div>
      </nav>
    )
}

export default Nav;