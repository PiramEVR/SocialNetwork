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

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 6,
                name: 'Met spam',
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            break;
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