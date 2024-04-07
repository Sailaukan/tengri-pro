import React from "react";
import classes from "./Comment.module.css"

const Comment = (props) =>{
    return(
        <div className={classes.comment}>
            <div className={classes.comment_userName}>
                {props.name}
            </div>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default Comment;