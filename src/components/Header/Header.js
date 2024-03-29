import React from "react";
import classes from "./Header.module.css";

const Header = () =>{
    return(
    <header className={classes.header}>
        <img className={classes.center} src='https://qtap.kz/img/logo_gray.svg'></img>
    </header>
    )
}

export default Header;