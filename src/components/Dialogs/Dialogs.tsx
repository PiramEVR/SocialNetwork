import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";
import Post from "../Profile/Post/Post";


type DialogsPropsType = {
    messages:[{
        id: number | null
        name: string | null
        message: string | null
    }]
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElement = props.messages.map(d=><Messages  key={d.id} name={d.name} message={d.message} id={d.id}/>);
    return (
        <div className={s.dialogs}>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;