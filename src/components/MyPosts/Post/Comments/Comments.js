import React, { useEffect, useState } from "react";
import classes from "./Comments.module.css"
import Comment from "./Сomment/Comment";
import { addDoc, getDocs, collection, doc } from "firebase/firestore";
import { auth, db } from "../../../../firebase-config";

const Comments = (props) => {
    const [commentText, setCommentText] = useState("");

    const commentsCollectionRef = collection(db, "comments");
    const createComment = async () => {
        await addDoc(commentsCollectionRef, {
            commentText,
            postID: props.id,
            user: {
                id: auth.currentUser.uid,
                name: auth.currentUser.displayName
            }
        })
    }

    const [commentLists, setCommentList] = useState([]);
    useEffect(() => {
        const getComment = async () => {
            const data = await getDocs(commentsCollectionRef);
            setCommentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getComment()
    })


    return (
        <div className={classes.comments_thread}>
            {props.isAuth ?
                <div className={classes.create_comment}>
                    {""}
                    <div className={classes.create_comment_container}>
                        <p>
                            Оставить комментарий
                        </p>
                        <div className={classes.inputGp}>
                            <textarea
                                className={classes.comment_area}
                                placeholder="Комментарий..."
                                onChange={(event) => {
                                    setCommentText(event.target.value)
                                }}
                            />
                        </div>
                        <button
                            onClick={createComment}
                            className={classes.create_comment_button}
                        >
                            Отправить
                        </button>
                    </div>
                </div>
                :
                <></>
            }
            <div>
                {commentLists.map((comment) =>
                    comment.postID === props.id ?
                        <Comment key={comment.id} {...comment} name={comment.user.name} text={comment.commentText} />
                        :
                        null)}
            </div>
        </div>
    )
}

export default Comments;