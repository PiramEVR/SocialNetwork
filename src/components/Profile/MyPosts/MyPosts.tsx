import React, {FC} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";


type MyPostsPropsType = {
    profilePage: {
        posts: [{
            id: number | null,
            message: string | null,
            likesCount: number | null
        }],
        newPostText: any
    }
    addPost: any
    updateNewPostText: any

}


function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.MyPost}>
            <input onChange={onPostChange}
                   type='textarea'
                   ref={newPostElement}
                   value={props.profilePage.newPostText}/>
            <button onClick={addPost}>Post</button>
            {postsElements}
        </div>
    )
}

export default MyPosts;