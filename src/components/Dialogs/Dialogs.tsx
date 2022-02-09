import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";
import {DialogsPageType} from "../../redux/dialogsReducer";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    onMessageChange: (text: string) => void
    newMessage: () => void
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogsPage.messages.map(d => <Messages
        key={d.id}
        name={d.name}
        message={d.message} id={d.id}/>);
    return (

        <div className={s.dialogs}>
            <input onChange={(e) => props.onMessageChange(e.currentTarget.value)}
                   type='textarea'
                // ref={newMessageElement}
                   value={props.dialogsPage.newMessageText}/>
            <button onClick={props.newMessage}>New message</button>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;