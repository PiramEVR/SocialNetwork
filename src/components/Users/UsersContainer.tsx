import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {GlobalState} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersActionTypes, UsersType} from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

type MapStatePropsType = {
    users: UsersType[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}


const mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);