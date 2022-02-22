import axios from "axios";
import React from "react";
import Header from "./Head";
import {setUserData} from "../../redux/authReducer";
import { connect } from "react-redux";
import {GlobalState} from "../../redux/redux-store";

type mapStatePropsType = {
    auth: boolean
    login: string
}
type mapDispatchPropsType = {
    setUserData:(userId: number, email: string, login: string)=>void
}

type HeaderContainerType= mapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
             if(response.data.resultCode === 0) {
                 let {id, login, email} =response.data.data;
                 this.props.setUserData(id, email, login)
             }
            })
    }

    render() {
        return <Header isAuth={this.props.auth} login={this.props.login} />
    }
}

const mapStateToProps = (state: GlobalState): mapStatePropsType  => {
    return {
        auth: state.auth.isAuth,
        login: state.auth.login,
    }

}

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);