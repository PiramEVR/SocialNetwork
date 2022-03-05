import React from "react";
import s from './Friends.module.css';
import {FriendsType} from "./FriendsContainer";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import {PagesPropsType} from "../Users/Users";


function Friends(props: FriendsType & PagesPropsType) {


    return (

        <div className={s.friends}>
            {props.users.map(f => {
                return f.followed && <div key={f.id}>
                     <span>
                    <div>
                        <NavLink to={'/profile/' + f.id}>
                         <img className={s.photo} src={f.photos.small
                             ? f.photos.small
                             : userPhoto} alt="Ava"/>
                        </NavLink>
                    </div>
                          <span>
                        <div>
                            {f.name}
                        </div>

                </span>
                    <div>{<button disabled={props.followingInProgress} onClick={() => {
                        props.follow(f.id)
                        // props.toggleFollowingInProgress(true)
                        // usersAPI.unfollow(u.id).then(data => {
                        //     if (data.resultCode === 0) {
                        //         props.unfollow(u.id)
                        //     }
                        //     props.toggleFollowingInProgress(false)
                        // })

                    }}>Unfollow</button>}

                        </div>
                </span>


                </div>
            })}
        </div>
    )
}

export default Friends;