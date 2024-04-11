import React, { useState } from "react";
import classes from "./Post.module.css";
import Comments from "./Comments/Comments";

const Post = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

const shareOnTelegram = () => {
    const title = encodeURIComponent(props.title);
    const url = encodeURIComponent(`https://tengri-pro.vercel.app/content`);
    const message = encodeURIComponent(`${title}\n\nЧитайте здесь: ${url}`);
    const emoji = "🗣 Tengri pro 🗣\n\n";
    const telegramUrl = `https://t.me/share/url?url=${emoji}&text=${message}`;
    window.open(telegramUrl, "_blank");
};


    return (
        <div>
            <div className={classes.container} onClick={openModal}>
                <div className={classes.post_photo}>
                    <img src={props.photo} alt="Post" className={classes.photo} />
                </div>
                <div className={classes.title_item}>
                    {props.title}
                </div>
                <div className={classes.post_info}>
                    {props.time}
                </div>
                <div className={classes.post_tag}>
                    {props.tag}
                </div>
            </div>
            {isOpen && (
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <span className={classes.close} onClick={closeModal}>
                            &times;
                        </span>
                        <div className={classes.title_modal}>
                            {props.title}
                        </div>
                        <div className={classes.time_modal}>
                            {props.time}
                        </div>
                        <div className={classes.photo_modal}>
                            <img src={props.photo} alt="Post" className={classes.photo} />
                        </div>
                        <div className={classes.text_modal}>
                            {props.text}
                        </div>
                        <button onClick={shareOnTelegram} className={classes.share_button}>Поделиться в Телеграм</button>
                        <Comments isAuth={props.isAuth} id={props.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
