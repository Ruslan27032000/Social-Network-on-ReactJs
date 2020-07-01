import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profileData:profileReducer,
    messageData:dialogsReducer,
    usersData:usersReducer,
    auth:authReducer
})

let store = createStore(reducers);

export default store;