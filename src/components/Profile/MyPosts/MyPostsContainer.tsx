import React, {FC} from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {
    addPostActionCreator,
    ProfileActionTypes,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


export type MyPostsContainerPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionTypes)=>void

}


function MyPostsContainer(props: MyPostsContainerPropsType) {



    let addPost = () => {

        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
         <MyPosts  posts={props.profilePage.posts}
                  newPostText={props.profilePage.newPostText}
                  addPost={addPost}
                  updateNewPostText={onPostChange}/>
    )
}

export default MyPostsContainer;