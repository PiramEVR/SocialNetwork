import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";

function MyPosts() {
    return (
        <div className={s.MyPost}>
            <input type='textarea'/>
            <button>Post</button>
            <Post message='Hi' like={3}/>
            <Post message='Hello' like={10}/>
            <Post message='How are you' like={4}/>
        </div>
    )
}

export default MyPosts;