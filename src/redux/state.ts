import {rerenderEntireTree} from "../render";


let state = {

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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
