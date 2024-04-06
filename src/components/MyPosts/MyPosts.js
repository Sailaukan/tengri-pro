import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () =>{
    return(
        <div className={classes.content}>
            <Post 
                text="Парень из Павлодара поступил в знаменитый вуз, где преподавал Эйнштейн" 
                photo="https://tengrinews.kz/userdata/news/2018/news_341532/thumb_b/photo_245392.jpeg.webp"
                time="06 апреля 2018 22:27"
            />
            <Post 
                text="Парень из Павлодара поступил в знаменитый вуз, где преподавал Эйнштейн" 
                photo="https://tengrinews.kz/userdata/news/2018/news_341532/thumb_b/photo_245392.jpeg.webp"
                time="06 апреля 2018 22:27"
            />
        </div>
        
    )
}

export default MyPosts;