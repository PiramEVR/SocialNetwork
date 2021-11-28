import React, {FC} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";


export type MyPostsPropsType = {
    posts :[ {
        id: number | null,
        message: string | null,
        likesCount: number| null
    }]
}


function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.MyPost}>
            <input type='textarea'/>
            <button>Post</button>
            {postsElements}
        </div>
    )
}

export default MyPosts;