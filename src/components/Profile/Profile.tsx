import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileActionTypes, ProfilePageType} from "../../redux/profileReducer";
import {ActionsAllType} from "../../App";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionTypes) => void
}


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;