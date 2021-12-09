import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";


export type DialogsPropsType = {
    dialogsPage: {
        messages: [{
            id: number;
            name: string;
            message: string;
        }]
        newMessageText: string
    }
    dispatch: any
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogsPage.messages.map(d => <Messages
        key={d.id}
        name={d.name}
        message={d.message} id={d.id}/>);
    let newMessageElement: any = React.createRef();
    let newMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action)
    }
    return (

        <div className={s.dialogs}>
            <input onChange={onMessageChange}
                   type='textarea'
                   ref={newMessageElement}
                   value={props.dialogsPage.newMessageText}/>
            <button onClick={newMessage}>New message</button>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;