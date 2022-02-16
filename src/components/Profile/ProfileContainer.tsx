import axios from "axios";
import React from "react";
import Profile from "./Profile";
import {GlobalState} from "../../redux/redux-store";
import { connect } from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "../../common/withRouter/withRouter";

type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType)=> void
}

type ownPropsType = {}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & ownPropsType


class ProfileContainer extends React.Component<ProfilePropsType & MatchParams> {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '16808'


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
                withCredentials: true,
                headers: {
                    'API-KEY': '4e6e4d4f-bd28-4d92-9c35-ed06a9'
                }
            })
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: GlobalState): MapStatePropsType => {
    return {
    profile: state.profilePage.profile
    }
}



export default connect(mapStateToProps, { setUserProfile }) (withRouter(ProfileContainer));