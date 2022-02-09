import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {ProfilePageType} from "../../../redux/profileReducer";


export type MyPostsPropsType = {

    profilePage: ProfilePageType


    addPost: () => void
    updateNewPostText: (text: string) => void
}
function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}/>)



    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.MyPost}>
            <input onChange={onPostChange}
                   type='textarea'
                   value={props.profilePage.newPostText}/>
            <button onClick={onAddPost}>Post</button>
            {postsElements}
        </div>
    )
}

export default MyPosts;