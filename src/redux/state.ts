const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_POST = 'ADD_POST';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'Hi sadfsad sadfsad', likesCount: 124543},
                {id: 3, message: 'Hi fsadfsadg gsdg', likesCount: 123},
                {id: 4, message: 'Hi sadfas sdgsg sg', likesCount: 112},
                {id: 5, message: 'Hi sadgsag hdfh d', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, name: 'Dim', message: 'Hey'},
                {id: 2, name: 'San', message: 'Hello'},
                {id: 3, name: 'Lin', message: 'Heghjghy'},
                {id: 4, name: 'Jon', message: 'Hi sadfas sdgsg sg'},
                {id: 5, name: 'Met', message: 'Hi sadgsag hdfh d'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },


    _addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    _addMessage() {
        let newMessage = {
            id: 6,
            name: 'Met spam',
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    _updateNewMessage(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    dispatch(action: any) {


        if (action.type === ADD_POST) {
            this._addPost()
        } else {

            if (action.type === UPDATE_NEW_POST_TEXT) {
                this._updateNewPostText(action.newText)
            } else if (action.type === ADD_MESSAGE) {
                this._addMessage()
            } else if (action.type === UPDATE_NEW_MESSAGE) {
                this._updateNewMessage(action.newText)
            }
        }


    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const updateNewMessageActionCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}

export default store;
