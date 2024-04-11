import React from "react";
import classes from "./profile.module.css";
import { auth, provider } from "../../firebase-config.js";
import { signInWithPopup, signOut } from 'firebase/auth';


const Profile = (props) => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            props.setIsAuth(true);
        });
    }

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            props.setIsAuth(false);
        })
    }

    return (
        <div className={classes.content}>
            {!props.isAuth ?
                <div className={classes.login}>
                    Зарегистрируйтесь с помощью аккаунта Google
                    <button
                        className={classes.google_button}
                        onClick={signInWithGoogle}>
                        Регистрация
                    </button>
                </div>
                :
                <div className={classes.profile_info}>
                    <img src={auth.currentUser.photoURL} alt="Profile" className={classes.profilePhoto} />
                    <div className={classes.userName}>
                        {auth.currentUser.displayName}
                    </div>
                    <div className={classes.email}>
                        {auth.currentUser.email}
                    </div>
                    <button
                        className={classes.logout}
                        onClick={signUserOut}>
                        Выйти из аккаунта
                    </button>
                </div>
            }
        </div>
    )
}

export default Profile;
