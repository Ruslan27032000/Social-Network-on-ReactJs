import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts"
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {

    let getNewElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange =()=>{
        let text = getNewElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    };
    let posts = props.data.posts.map(p=><Posts name={p.name}
                                         message={p.message}/>).reverse();
    return (
        <div className={s.wPosts}>
            Create post:
            <div>
                <textarea onChange={onPostChange} ref={getNewElement} value={props.data.postText} onKeyPress={
                    event => {
                    if (event.key === "Enter") {
                        addPost()
                        event.preventDefault();
                    }
                    }}/> <br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.nPosts}>
                New posts:
                {posts}
            </div>
        </div>
    );
}
export default MyPosts;