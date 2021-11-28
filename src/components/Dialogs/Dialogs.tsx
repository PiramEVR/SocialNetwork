import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";

let messages = [
    {id: 1,name: 'Dim', message: 'Hey',},
    {id: 2,name: 'San', message: 'Hello'},
    {id: 3,name: 'Lin', message: 'Heghjghy'},
    {id: 4,name: 'Jon', message: 'Hi sadfas sdgsg sg'},
    {id: 5,name: 'Met', message: 'Hi sadgsag hdfh d'},
]

let dialogsElement = messages.map(d=><Messages name={d.name} message={d.message} id={d.id}/>);


type DialogsPropsType = {}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;