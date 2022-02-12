const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType = {
    city?: string
    country?: string
}

type PhotosType = {
    small?: string | null
    large?: string | null
}

export type UsersType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
    location?: LocationType
}

export type UsersPageType = {
    users: Array<UsersType>
}

export type followActionType = {
    type: 'FOLLOW'
    userId: number
}


export type unfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type usersActionType = {
    type: 'SET_USERS'
    users: UsersType[]
}

export type UsersActionTypes = followActionType | unfollowActionType | usersActionType


let initialState: UsersPageType = {
    users: []
}


const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageType => {
    let stateCopy

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userId: number): followActionType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: number): unfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users:UsersType[]): usersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;