import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Dialogs from "../components/Dialogs/Dialogs";
import {GlobalState} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: GlobalState): MapStatePropsType => {
    return{
        isAuth: state.auth.isAuth
    }

}

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Navigate  to={"/login"}/>
            return <Component {...this.props}/>;
        }
    }
    const ConnectAuthRedirectComponent  = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent;
};
