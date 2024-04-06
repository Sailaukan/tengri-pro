import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.title_item}>
                {props.text}
            </div>
            <div className={classes.post_info}>
                {props.time}
            </div>
            <div className={classes.post_photo}>
                <img src={props.photo} alt="Post" className={classes.photo} />
            </div>
        </div>
    )
}

export default Post;
