import React from "react";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <div className={s.img}><img
                src={props.profile.photos.large}
                alt=""/>
            </div>
            <div className={s.user}>
                {props.profile.fullName}
                <br/>
                {props.profile.aboutMe}
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;