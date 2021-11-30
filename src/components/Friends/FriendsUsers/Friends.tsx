import React from "react";
import s from './FriendsUsers.module.css';

type FriendsPropsType = {
        name: string | null;
}

function FriendsUsers(props: FriendsPropsType) {
    return (
        <div className={s.friends}>
            <img
                src='https://www.pikpng.com/pngl/b/548-5488223_discover-ideas-about-henna-tattoo-stencils-samurai-logo.png'
            />
            {props.name}
        </div>
    )
}

export default FriendsUsers;