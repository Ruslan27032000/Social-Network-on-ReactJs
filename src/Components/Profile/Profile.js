import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
        <div className={s.profile}>
            <div className={s.img}><img
                src="https://www.wisemoneyisrael.com/wp-content/uploads/2015/05/Industry-1000x100.jpg"
                alt=""/>
            </div>
            <div className="">
                ava + descr
            </div>
            <Posts />
        </div>
    );
}

export default MyPosts;