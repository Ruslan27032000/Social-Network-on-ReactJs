/*Здесь не должно быть импортов*/
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
    subscribe(observer) {
        this.rerender = observer;
        this.rerender(this.getState());
    },


    dispatch(action) { /*action = {type:"",newText:""}*/
        if (action.type === ADD_POST) {
            let n = {
                name: "Ruslan",
                message: this._state.profileData.postText
            };

            this._state.profileData.posts.push(n);
            this._state.profileData.postText = "";
            this.rerender(this._state)
        } else if (action.type === UPDATE_NEW_POST_MESSAGE) {
            this._state.profileData.postText = action.newText;
            this.rerender(this._state);
        } else if (action.type === ADD_MESSAGE) {
            debugger;
            let n = {
                id: 2,
                message: this._state.messageData.messageText
            }
            this._state.messageData.messages.push(n);
            this._state.messageData.messageText = "";
            this.rerender(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messageData.messageText = action.newText;
            this.rerender(this._state);
        }
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}



export default store;