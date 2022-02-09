import React from "react";
import {NavLink} from "react-router-dom";
import s from './Messages.module.css'

export type MessagesPropsType = {
    id: number
    name: string
    message: string
}


function Messages(props: MessagesPropsType) {
    return (

        <div className={s.messages}>
            <div className={s.name}>
                <NavLink className={s.name} to={'/dialogs/' + props.id}>
                    {props.name}
                </NavLink>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Messages;