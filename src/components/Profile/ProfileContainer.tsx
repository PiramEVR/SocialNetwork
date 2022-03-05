import React from "react";
import Profile from "./Profile";
import {GlobalState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "../../common/withRouter/withRouter";
import { Navigate } from "react-router-dom";

type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type ownPropsType = {}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & ownPropsType


class ProfileContainer extends React.Component<ProfilePropsType & MatchParams> {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '16808'

        this.props.getUserProfile(userId);
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
        if(!this.props.isAuth) {
            return <Navigate  to={"/login"}/>
        }
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));