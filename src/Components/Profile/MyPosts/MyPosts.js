import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts"

const MyPosts = (props) => {

    let getNewElement = React.createRef();

    let posts = props.posts.map(p => <Posts profile={props.profile} name={p.name}
                                                 message={p.message}/>).reverse();

    let addPost = () => {
        props.onAddPost();
    }

    let deletePosts = ()=>{
        props.onDeletePosts();
    }

    let postChange = () => {
        let text = getNewElement.current.value;
        props.onPostChange(text);
    };

    return (
        <div className={s.wPosts}>
            Create post:
            <div>
                <textarea onChange={postChange} ref={getNewElement} value={props.value} onKeyPress={
                    event => {
                        if (event.key === "Enter") {
                            addPost()
                            event.preventDefault();
                        }
                    }}/> <br/>
                <button onClick={addPost}>Add post</button>
                <button onClick={deletePosts}>Delete Posts</button>
            </div>
            <div className={s.nPosts}>
                New posts:
                {posts}
            </div>
        </div>
    );
}
export default MyPosts;