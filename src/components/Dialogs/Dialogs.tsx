import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messsages/Messages";

type DialogsPropsType = {}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <Messages name='Dim' message="Hey" id={1} />
            <Messages name='San' message="Hello" id={2} />
            <Messages name='Lin' message="Heghjghy" id={3}/>
            <Messages name='Jon' message="Hegfjhy" id={4} />
            <Messages name='Met' message="Hegfjgjy" id={5} />
            <Messages name='Ur' message="sdfgdfsgHey" id={6} />
        </div>
    )
}

export default Dialogs;