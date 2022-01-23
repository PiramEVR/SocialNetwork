const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type AddPostActionType = {
    type: 'ADD_POST'
    newPostText?: string
}


export type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

export type ProfileActionTypes = AddPostActionType | UpdateNewPostTextActionType


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hi sadfsad sadfsad', likesCount: 124543},
        {id: 3, message: 'Hi fsadfsadg gsdg', likesCount: 123},
        {id: 4, message: 'Hi sadfas sdgsg sg', likesCount: 112},
        {id: 5, message: 'Hi sadgsag hdfh d', likesCount: 2},
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action: ProfileActionTypes) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }


    return state;
}
export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;