import React from "react";
import {connect} from "react-redux";
import {GlobalState} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, unfollow, UsersType} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


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

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersClass extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}
                // users={this.props.users}
                //    pageSize={this.props.pageSize}
                //    totalUsersCount={this.props.totalUsersCount}
                //    currentPage={this.props.currentPage}
                //    follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers}
                //    setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                //    onPageChanged={this.onPageChanged}
                //    toggleIsFetching={this.props.toggleIsFetching} isFetching={this.props.isFetching}
                //    toggleFollowingInProgress={this.props.toggleFollowingInProgress} followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes>): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }
//

const AuthRedirectComponent  = withAuthRedirect(UsersClass)
export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        getUsers,
        setCurrentPage,
        // setUsers,
        // setTotalUsersCount,
        // toggleIsFetching,
        // toggleFollowingInProgress,
    })(AuthRedirectComponent);