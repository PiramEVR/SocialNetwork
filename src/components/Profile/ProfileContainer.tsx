import React from "react";
import Profile from "./Profile";
import {GlobalState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "../../common/withRouter/withRouter";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

type ownPropsType = {}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & ownPropsType


class ProfileContainer extends React.Component<ProfilePropsType & MatchParams> {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '16808'

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);


        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
        //         withCredentials: true,
        //         headers: {
        //             'API-KEY': '4e6e4d4f-bd28-4d92-9c35-ed06a9'
        //         }
        //     })
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //
        //     })
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);