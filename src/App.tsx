import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Musik/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import {ProfileActionTypes} from "./redux/profileReducer";
import {DialogsActionTypes} from "./redux/dialogsReducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {GlobalState} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export type ActionsAllType = ProfileActionTypes | DialogsActionTypes

type AppPropsType = {
    dispatch: (action: ActionsAllType) => void
    state: GlobalState
}


function App(props: AppPropsType) {
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer />}/>
                    <Route path='/users' element={<UsersContainer />}/>

                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                    <Route path='/Friends' element={<Friends dialogsPage={props.state.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
