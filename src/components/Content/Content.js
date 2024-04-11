import React from "react";
import classes from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config.js";


const Content = (props) => {

    return (
        <div className={classes.content}>

            <div className={classes.thread}>
                {!props.isAuth ?
                    <div className={classes.item}>
                        <p className={classes.text_signin}>
                            Пожалуйста <Link to="/profile" className={classes.text_signin_link}>зарегистрируйтесь</Link>, чтобы оставлять комментарии.
                        </p>
                    </div>
                    :
                    <div>
                        <p className={classes.text_welcome}>
                            Самые свежие новости специально для вас,
                        </p>
                        <h2 className={classes.text_userName}>
                            {auth.currentUser.displayName}
                        </h2>
                    </div>
                }
                <MyPosts isAuth={props.isAuth} />
            </div>
        </div>
    )
}

export default Content;