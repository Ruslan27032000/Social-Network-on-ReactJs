import React from "react";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.img}><img
                src="https://www.wisemoneyisrael.com/wp-content/uploads/2015/05/Industry-1000x100.jpg"
                alt=""/>
            </div>
            <div className={s.user}>
                ava + descr
            </div>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;