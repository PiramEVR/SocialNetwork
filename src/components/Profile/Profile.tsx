import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


function Profile(props: ProfilePropsType) {

    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status}  updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;