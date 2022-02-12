import React from "react";
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'


class UsersClass extends React.Component<UsersPropsType>{

    constructor(props: UsersPropsType) {
        super(props);

    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
    })
    }

    render() {
        return <div className={s.users}>

            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={u.photos.small
                            ? u.photos.small
                            : userPhoto} alt="Ava"/>
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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

    }
}

export default UsersClass;