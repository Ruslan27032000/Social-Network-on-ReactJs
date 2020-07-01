import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={props.profile.photos.small} alt=""/>
                <a href="#">{props.profile.fullName}</a>
                <p>{props.message}</p>
            </div>
        </div>
);
};

export default Posts;