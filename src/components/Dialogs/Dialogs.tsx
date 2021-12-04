import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";


export type DialogsPropsType = {
    dialogsPage: {
        messages: [{
            id: any;
            name: any;
            message: any;
        }]
        newMessageText: string
    }
    addMessage: any
    updateNewMessage: any
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.dialogsPage.messages.map(d => <Messages
        key={d.id}
        name={d.name}
        message={d.message} id={d.id}/>);
    let newMessageElement: any = React.createRef();

    let newMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text)
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