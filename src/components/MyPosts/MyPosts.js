import React, { useState, useEffect } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config.js";


const topics = ["News", "Life", "Sport", "Travel", "Edu", "Auto"];


const MyPosts = (props) => {

    const [selectedTopic, setSelectedTopic] = useState(topics[0]);
    const scrollTopics = (direction) => {
        const currentIndex = topics.indexOf(selectedTopic);
        if (direction === 'left' && currentIndex > 0) {
            setSelectedTopic(topics[currentIndex - 1]);
        }
        else if (direction === 'right' && currentIndex < topics.length - 1) {
            setSelectedTopic(topics[currentIndex + 1]);
        }
    };

    const [postLists, setPostList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    return (
        <div className={classes.content}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ overflowX: 'auto', display: 'flex' }}>
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className={classes.search}
                            onClick={() => setSelectedTopic(topic)}
                            style={{
                                backgroundColor: selectedTopic === topic ? 'white' : 'transparent',
                                color: selectedTopic === topic ? 'black' : 'white',

                            }
                            }
                        >
                            {topic}
                        </div>
                    )
                    )
                    }
                </div>
            </div>

            <div className={classes.searchBar}>
                <input
                    type="text"
                    placeholder="Поиск..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={classes.searchInput}
                />
            </div>

            <div>
                {postLists
                    .filter((post) => {
                        if (searchTerm === "") { return post; }
                        else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return post;
                        }
                        return false;
                    })

                    .filter((post) => {
                        return selectedTopic === 'all' || post.tag === selectedTopic;
                    })

                    .map((post) => {
                        return (
                            <Post
                                id={post.id}
                                tag={post.tag}
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
    );
};

export default MyPosts;