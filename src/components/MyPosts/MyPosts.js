import React, { useState, useEffect } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {collection, getDocs} from "firebase/firestore"
import {db, auth} from "../../firebase-config.js";

const MyPosts = (props) =>{
    const [postLists, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");

    useEffect(()=>{
        const getPosts = async () =>{
            const data = await getDocs(postCollectionRef)
            setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        } 
        getPosts(); 
    })

    return(
        <div className={classes.content}>
            <div>
                {postLists.map((post)=>{
                    return(
                        <Post 
                            id={post.id}
                            title={post.title} 
                            photo={post.image}
                            time={post.time}
                            text={post.text}
                            isAuth={props.isAuth}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default MyPosts;