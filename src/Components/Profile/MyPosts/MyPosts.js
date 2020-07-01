import React from "react";
import s from "./Posts.module.css";

const Posts = () => {
    return (
        <div className={s.profile}>
            <div className={s.img}><img
                src="https://www.wisemoneyisrael.com/wp-content/uploads/2015/05/Industry-1000x100.jpg"
                alt=""/>
            </div>
            <div className="">
                ava + descr
            </div>
            <div className="posts">
                My posts
                <div className="item">
                    New posts
                </div>
                <div className="">
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;