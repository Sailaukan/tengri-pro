import React from "react";
import classes from "./Header.module.css";
import Logo from "./logo.svg";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.center} src={Logo} alt="Logo" />
        </header>
    );
}

export default Header;
