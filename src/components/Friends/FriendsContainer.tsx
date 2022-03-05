import React from "react";
import {connect} from "react-redux";
import {GlobalState} from "../../redux/redux-store";
import Friends from "./Friends";
import {follow, getUsers, setCurrentPage, unfollow, UsersType} from "../../redux/usersReducer";
import Preloader from "../../common/Preloader/Preloader";

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress?: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    // setUsers: (users: UsersType[]) => void
    // setTotalUsersCount: (totalUsersCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingInProgress: (followingInProgress: boolean) => void
}

export type FriendsType = MapStatePropsType & MapDispatchPropsType


class FriendsContainer extends React.Component <FriendsType> {

    componentDidMount() {


    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends {...this.props} onPageChanged={this.onPageChanged}/>
            </>
        )
    }

}


const mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
})(FriendsContainer)