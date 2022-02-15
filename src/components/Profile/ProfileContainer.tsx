import axios from "axios";
import React from "react";
import Profile from "./Profile";
import {GlobalState} from "../../redux/redux-store";
import { connect } from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType)=> void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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



export default connect(mapStateToProps, { setUserProfile }) (ProfileContainer);