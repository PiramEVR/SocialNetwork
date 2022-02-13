const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
export type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setTotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
export type toggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export type UsersActionTypes = followActionType
    | unfollowActionType
    | usersActionType
    | setCurrentPageActionType
    | setTotalUsersCountType
    | toggleIsFetchingActionType

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
}


const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageType => {


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
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
export const setUsersAC = (users: UsersType[]): usersActionType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default usersReducer;