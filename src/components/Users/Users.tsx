import React from "react";
import s from './Users.module.css';
import {UsersType} from "../../redux/usersReducer";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

function Users(props: UsersPropsType) {


    return (

        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={u.photoUrl} alt="Ava"/>
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
                            {u.fullName}
                        </div>
                        <div>
                           {u.status}
                    </div>
                    </span>
                      <span>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                    </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;