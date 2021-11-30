import React from "react";
import { NavLink } from "react-router-dom";
import s from './Messages.module.css'

type MessagesPropsType = {
    name: string | null;
    message: string | null;
    id: number | null;
}

function Messages(props: MessagesPropsType) {

    let newMessageElement: any = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
    }

    return (

        <div className={s.messages}>
            <div className={s.name}>
                <NavLink className={s.name }  to={'/dialogs/'+props.id}> {props.name}</NavLink>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div>
                <input type='textarea' ref={newMessageElement}/>
                <button onClick={newMessage}>New message</button>
            </div>
        </div>
    )
}

export default Messages;