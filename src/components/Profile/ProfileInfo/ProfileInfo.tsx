import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile) return <Preloader/>
debugger
    return (
        <div className={s.content}>
            <img src={props.profile.photos.large}/>
            description
        </div>
    )
}

export default ProfileInfo;
