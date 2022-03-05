import {Dispatch} from "react";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

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
    followingInProgress: boolean
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
export type toggleFollowingInProgressActionType = {
    type: 'FOLLOWING_IN_PROGRESS'
    followingInProgress: boolean
}

export type UsersActionTypes = followActionType
    | unfollowActionType
    | usersActionType
    | setCurrentPageActionType
    | setTotalUsersCountType
    | toggleIsFetchingActionType
    | toggleFollowingInProgressActionType

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: false,
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
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
            }
        default:
            return state;
    }
}
export const followSuccess = (userId: number): followActionType => ({
    type: FOLLOW, userId
})
export const unfollowSuccess = (userId: number): unfollowActionType => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users: UsersType[]): usersActionType => ({
    type: SET_USERS, users
})

export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleFollowingInProgress = (followingInProgress: boolean): toggleFollowingInProgressActionType => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress
})

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<any>) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}



export const follow = (userId: number) => (dispatch: Dispatch<any>) => {
    dispatch(toggleFollowingInProgress(true))
    usersAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false))
    })
}
export const unfollow = (userId: number) => (dispatch: Dispatch<any>) => {
    dispatch(toggleFollowingInProgress(true))
    usersAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false))
    })
}

export default usersReducer;