import React from "react";
import s from './Friends.module.css';
import FriendsUsers from "./FriendsUsers/Friends";
import Post from "../Profile/Post/Post";

type FriendsPropsType = {
    messages: [{
        name: string | null;
        id: number | null
    }]
}

function Friends(props: FriendsPropsType) {

    let friendsElement = props.messages.map(n=><FriendsUsers  key={n.id} name={n.name}/>);
    return (

        <div className={s.friends}>
        {friendsElement}
        </div>
    )
}

export default Friends;