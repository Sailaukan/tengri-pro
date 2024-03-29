import React from "react";
import classes from "./Post.module.css"

const Post = (props) =>{
    return(
        <div className={classes.container}>
           {props.text}
        </div>
    )
}

export default Post;