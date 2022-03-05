import React from "react";
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type PagesPropsType = {
    onPageChanged: (pageNumber: number) => void
}

function Users(props: UsersPropsType & PagesPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div className={s.users}>


            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                         <img className={s.photo} src={u.photos.small
                             ? u.photos.small
                             : userPhoto} alt="Ava"/>
                        </NavLink>
                    </div>
                    <div>{u.followed
                        ? <button disabled={props.followingInProgress} onClick={() => {
                            props.follow(u.id)
                            // props.toggleFollowingInProgress(true)
                            // usersAPI.unfollow(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //         props.unfollow(u.id)
                            //     }
                            //     props.toggleFollowingInProgress(false)
                            // })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress} onClick={() => {
                            props.unfollow(u.id)
                            // props.toggleFollowingInProgress(true)
                            // usersAPI.follow(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //         props.follow(u.id)
                            //     }
                            //     props.toggleFollowingInProgress(false)
                            // })
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
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>
                        {p}-
                    </span>
                })}

            </div>
        </div>
    )
}

export default Users;