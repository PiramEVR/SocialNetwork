let store= {
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
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    addMessage() {
        let newMessage = {
            id: 6,
            name: 'Met spam',
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    updateNewMessage(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

}


export default store;
