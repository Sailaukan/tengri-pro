import React from "react";
import classes from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Content = () =>{
    return(
        <div className={classes.content}>
            <div className={classes.bio}>
                <div className={classes.item}>
                    <div className={classes.ava}>
                        <img src="https://digitalbusiness.kz/wp-content/uploads/2023/07/eew.jpg"></img>
                    </div>
                </div>
                <div className={classes.item}>
                    Description
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Content;