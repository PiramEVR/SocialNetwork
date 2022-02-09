import React, {Dispatch, FC} from "react";
import {
    addPostActionCreator,
    ProfileActionTypes,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {GlobalState} from "../../../redux/redux-store";
import { connect } from "react-redux";


// export type MyPostsContainerPropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ProfileActionTypes)=>void
//
// }
//
//
// function MyPostsContainer(props: MyPostsContainerPropsType) {
//
//
//
//     let addPost = () => {
//
//         props.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text: string) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.dispatch(action);
//     }
//
//     return (
//          <MyPosts  posts={props.profilePage.posts}
//                   newPostText={props.profilePage.newPostText}
//                   addPost={addPost}
//                   updateNewPostText={onPostChange}/>
//     )
// }

let mapStateToProps = (state: GlobalState) => {
    return {
        profilePage: state.profilePage
    }
}


let mapDispatchToProps = (dispatch: Dispatch<ProfileActionTypes>) => {
    return {
        addPost:()=> {
            dispatch(addPostActionCreator());
        },
        updateNewPostText:(text: string)=> {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;