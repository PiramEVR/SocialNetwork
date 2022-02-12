import React from "react";
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'


function Users(props: UsersPropsType) {

const getUsers = () => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
        //         followed: true,
        //         fullName: 'Alex',
        //         status: 'study',
        //         location: {city: 'Donskoy', country: 'Russia'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
        //         followed: false,
        //         fullName: 'Dimych',
        //         status: 'boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://pbs.twimg.com/profile_images/532806526100967424/FRU1oBvH.jpeg',
        //         followed: true,
        //         fullName: 'Vova',
        //         status: 'job',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     }
        //
        // ])
    }
}

    return (

        <div className={s.users}>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={u.photos.small
                            ? u.photos.small
                            : userPhoto} alt="Ava"/>
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                           {u.status}
                    </div>
                    </span>
                      <span>
                        <div>
                            {'u.location.city'}
                        </div>
                        <div>
                            {"u.location.country"}
                    </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;