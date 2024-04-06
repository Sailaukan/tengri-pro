import React from "react";
import classes from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Content = () =>{
    return(
        <div className={classes.content}>
            <div className={classes.thread}>
                <div className={classes.item}>
                    Not ready yet
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Content;