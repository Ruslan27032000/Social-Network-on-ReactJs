/*Здесь не должно быть импортов*/
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
    _state: {
        profileData: {
            posts: [
                {name: "Ruslan", message: "Hello"},
                {name: "Adal", message: "How are you?"},
                {name: "Ruslan", message: "What's up?"}
            ],
            postText: ""
        },
        messageData: {
            messageText: "",
            names: [
                {id: 1, name: "Ruslan"},
                {id: 2, name: "Adal"},
                {id: 3, name: "Maxim"},
                {id: 4, name: "Almat"},
                {id: 5, name: "Ilyas"},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your deals?"},
                {id: 1, message: "Yo!"},
                {id: 1, message: "Yo!"},
                {id: 1, message: "Yo!"}
            ]
        }
    },
    rerender() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) { /*"подписываемся на обновления" и вызываем их при нужде*/
        this.rerender = observer;
        this.rerender(this.getState());
    },



    dispatch(action) { /*action = {type:"",newText:""}*/

        this._state.profileData = profileReducer(this._state.profileData, action);/*передаем profileData*/
        this._state.messageData = dialogsReducer(this._state.messageData, action)/*передаем messageData*/
        this.rerender(this._state)

    }
}


export default store;