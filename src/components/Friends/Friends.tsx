import React from "react";
import s from './Friends.module.css';
import FriendsUsers from "./FriendsUsers/FriendsUsers";

type FriendsPropsType = {
    dialogsPage: {
        messages: Array<{
            name: string
            id: number
        }>
    }
}

function Friends(props: FriendsPropsType) {

    let friendsElement = props.dialogsPage.messages.map(n => <FriendsUsers key={n.id} name={n.name}/>);
    return (

        <div className={s.friends}>
            {friendsElement}
        </div>
    )
}

export default Friends;