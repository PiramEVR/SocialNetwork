import messages from "../components/Dialogs/Messsages/Messages";

const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

export type MessageType = {
    id: number
    name: string
    message: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    newMessageText: string
}

type AddMessageActionType = {
    type: 'ADD_MESSAGE'
    newMessageText?: string
}


type UpdateNewMessageTextActionType = {
    type: 'UPDATE_NEW_MESSAGE'
    newText: string
}

export type DialogsActionTypes = AddMessageActionType | UpdateNewMessageTextActionType

let initialState: DialogsPageType = {
    messages: [
        {id: 1, name: 'Dim', message: 'Hey'},
        {id: 2, name: 'San', message: 'Hello'},
        {id: 3, name: 'Lin', message: 'Heghjghy'},
        {id: 4, name: 'Jon', message: 'Hi sadfas sdgsg sg'},
        {id: 5, name: 'Met', message: 'Hi sadgsag hdfh d'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: DialogsActionTypes) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let copyState = {...state}
            let newMessage = {
                id: 6,
                name: 'Met spam',
                message: state.newMessageText,
            }
            copyState.messages=[...state.messages] ;
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }

        case UPDATE_NEW_MESSAGE: {
            let copyState = {...state}
            copyState.newMessageText = action.newText;
            return copyState;
        }

    }
    return state;
}

export const addMessageActionCreator = (): AddMessageActionType => {

    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageActionCreator = (text: string): UpdateNewMessageTextActionType => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}

export default dialogsReducer;