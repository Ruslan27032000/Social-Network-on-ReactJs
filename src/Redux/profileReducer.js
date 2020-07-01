const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const SET_USER_PROFILE='SET_USER_PROFILE';
const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS';

let initialState = {
    posts: [],
    profile:null,
    postText: ""
}

export const profileReducer = (state = initialState, action) => { /* в state получаем profileData */
    switch (action.type) {
        case UPDATE_NEW_POST_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.postText = action.newText;
            return stateCopy;
        }
        case ADD_POST: {
            let n = {
                name: "Ruslan",
                message: state.postText
            };
            let stateCopy = {...state};/*Мы не имеем право менять пришедший объект, мы делаем его полную копию и возвращаем*/
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(n);
            stateCopy.postText = "";
            return stateCopy;
        }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile:action.profile
            }
        case DELETE_ALL_POSTS:
            return {
                ...state,
                posts:[]
            }
        default:
            return state;

    }
}

export const setUserProfile = (profile)=>{
    return{
        type:SET_USER_PROFILE,
        profile
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_MESSAGE,
        newText: text
    }
}

export const deleteAllPosts = ()=>{
    return{
        type:DELETE_ALL_POSTS
    }
}