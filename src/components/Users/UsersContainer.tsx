import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {GlobalState} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersActionTypes, UsersType} from "../../redux/usersReducer";

const mapStateToProps = (state: GlobalState) => {
 return {
     users: state.usersPage.users
 }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes> ) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);