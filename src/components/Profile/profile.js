import React from "react";
import classes from "./profile.module.css";

const Profile = () => {
    return(
        <div className={classes.content}>
            <div className={classes.login}>
                Login
            </div>
            <div className="profile_info">
            </div>
        </div>
    )

}

export default Profile;