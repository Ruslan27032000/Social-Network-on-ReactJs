import React from "react";
import s from "./Users.module.css";
import userLogo from "../../Assets/Images/UserLogo.svg.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i > 10)
            break
        else
            pages.push(i);
    }
    return (
        <div>
            <div className={s.users}>
                {props.users.map(u =>
                    <div className={s.main}>
                        <div className={s.ava}>
                            <NavLink to={'/profile/'+u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.large : userLogo}
                                    alt=""/>
                            </NavLink>
                            {u.following
                                ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                        <div className={s.info}>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                            <p>{"u.location.city"}, {"u.location.country"}</p>
                        </div>
                    </div>
                )
                }
            </div>
            <div className={s.countPages}>
                {pages.map(p => <span onClick={() => {
                    props.onCurrentPage(p)
                }}
                                      className={props.currentPage === p && s.selectedPage}>{p}
                </span>)}
            </div>
        </div>)
}

export default Users;