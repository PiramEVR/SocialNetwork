import profile from "../components/Profile/Profile";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type AddPostActionType = {
    type: 'ADD_POST'
    newPostText?: string
}


export type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type setUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType | null
}
export type setStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

export type ProfileActionTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | setUserProfileActionType
    | setStatusActionType


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hi sadfsad sadfsad', likesCount: 124543},
        {id: 3, message: 'Hi fsadfsadg gsdg', likesCount: 123},
        {id: 4, message: 'Hi sadfas sdgsg sg', likesCount: 112},
        {id: 5, message: 'Hi sadgsag hdfh d', likesCount: 2},
    ],
    newPostText: '',
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: ProfileActionTypes) => {
    let stateCopy

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {...state, newPostText: action.newText}
            return stateCopy
        }
        case SET_USER_PROFILE: {

            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }


        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const setUserProfile = (profile: ProfileType): setUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status: string): setStatusActionType => {
    return {type: SET_STATUS, status}
}


export const getUserProfile = (userId: string) => (dispatch: Dispatch<any>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch<any>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch<any>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export default profileReducer;