import React from "react";
import {addPostActionCreator, deleteAllPosts, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {

    return (
        <Consumer>
            {(store) => {
                let state = store.getState().profileData;
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                };

                return (
                    <MyPosts onAddPost={onAddPost}
                             onPostChange={onPostChange}
                             posts={state.posts}
                             value={state.postText}/>
                )
            }

            }
        </Consumer>


    );
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        value: state.profileData.postText,
        profile:state.profileData.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost:()=>{dispatch(addPostActionCreator());},
        onPostChange:(text)=>{dispatch(updateNewPostActionCreator(text));},
        onDeletePosts:()=>{dispatch(deleteAllPosts())}
    }
}
/*Берутся объекты из функций и делаются объектами props*/


const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostContainer;