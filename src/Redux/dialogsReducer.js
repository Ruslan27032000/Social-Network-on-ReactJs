const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => { /*в state получаем messageData*/
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.newText
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.messageText}],
                messageText: ""
            }
        default:
            return state;
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
