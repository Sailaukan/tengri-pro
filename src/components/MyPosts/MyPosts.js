import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () =>{
    return(
        <div className={classes.content}>
            <Post text="1"/>
            <Post text="2"/>
            <Post text="3"/>
            <Post text="4"/>
        </div>
    )
}

export default MyPosts;