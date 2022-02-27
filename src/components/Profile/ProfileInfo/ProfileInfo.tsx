import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import usersIMG from '../../../assets/images/user.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <img className={s.content} src={props.profile.photos.large
                ? props.profile.photos.large
                : usersIMG}/>
            description
        </div>
    )
}

export default ProfileInfo;
