import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {
    addMessageActionCreator, DialogsActionTypes, DialogsPageType,
    updateNewMessageActionCreator
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {GlobalState} from "../../redux/redux-store";


// export type DialogsPropsType = {
//     dialogsPage: DialogsPageType
//     dispatch: (action: DialogsActionTypes) => void
// }

//
// function DialogsContainers(props: DialogsPropsType) {
//
//
//     let newMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     }
//
//     let onMessageChange = (text: string) => {
//         props.dispatch(updateNewMessageActionCreator(text))
//     }
//     return (
//         <Dialogs dialogsPage={props.dialogsPage}
//                  onMessageChange={onMessageChange}
//                  newMessage={newMessage}
//         />
//     )
// }

type mapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

let mapStateToProps = (state: GlobalState): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch: Dispatch<DialogsActionTypes>) => {
    return {
        newMessage:()=> {
            dispatch(addMessageActionCreator())
        },
        onMessageChange:(text: string)=> {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;