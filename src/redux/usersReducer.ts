const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
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
    users: UsersType
}

export type UsersActionTypes = followActionType | unfollowActionType | usersActionType


let initialState: UsersPageType = {
    users: [    {
        id: 1,
        photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
        followed: true,
        fullName: 'Alex',
        status: 'study',
        location: {city: 'Donskoy', country: 'Russia'}
    },
        {
            id: 2,
            photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
            followed: false,
            fullName: 'Dimych',
            status: 'boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
            followed: true,
            fullName: 'Vova',
            status: 'job',
            location: {city: 'Moscow', country: 'Russia'}
        }]
}


const usersReducer = (state = initialState, action: UsersActionTypes) => {
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
                users: [...state.users, {...action.users}]
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
export const setUsersAC = (users:UsersType): usersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;