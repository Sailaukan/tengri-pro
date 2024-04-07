import React, { useState } from "react";
import classes from "./profile.module.css";
import {auth, provider} from "../../firebase-config.js";
import {signInWithPopup, getAuth, signOut} from 'firebase/auth';


const Profile = (props) => {
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth",true);
            props.setIsAuth(true);
        });
    }

    const signUserOut = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            props.setIsAuth(false);
        })
    }
    
    return(
        <div className={classes.content}>
            {!props.isAuth ?
                <div className={classes.login}>
                Зарегестрируйтесь с помощью аккаунта Google
                    <button 
                    className={classes.google_button}
                    onClick={signInWithGoogle}>
                        Регистрация
                    </button>
                </div> 
                :
                <div className={classes.profile_info}>
                    Profile info
                    <button 
                    className={classes.logout}
                    onClick={signUserOut}>
                    Sign Out
                    </button>
                </div>
            } 
        </div>
    )
}


export default Profile;