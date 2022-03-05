import React from "react";
import Header from "./Head";
import {getAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {GlobalState} from "../../redux/redux-store";

type mapStatePropsType = {
    auth: boolean
    login: string
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
}

type HeaderContainerType = mapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        // authAPI.me().then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, Login, email} = response.data.data;
        //         this.props.setUserData(id, email, Login)
        //     }
        // })
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.auth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: GlobalState): mapStatePropsType => {
    return {
        auth: state.auth.isAuth,
        login: state.auth.login,
    }

}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);