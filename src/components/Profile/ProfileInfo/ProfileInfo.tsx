import React from "react";
import s from './ProfileInfo.module.css';

type PostPropsType = {
    message: string;
    like: number;
}

function ProfileInfo(props: any) {
    return (
        <div className={s.content}>
            <img src='https://vraki.net/sites/default/files/inline/images/16_11.jpeg'/>
            <div>this is my page</div>
        </div>
    )
}

export default ProfileInfo;
