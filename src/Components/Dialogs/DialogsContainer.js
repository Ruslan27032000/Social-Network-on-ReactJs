import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = () => {
    return (
        <Consumer>
            {store => {
                let state = store.getState().messageData;

                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                };


                return (<Dialogs onSendMessage={onSendMessage}
                                 onMessageChange={onMessageChange}
                                 value={state.messageText}
                                 names={state.names}
                                 messages={state.messages}/>
                )
            }
            }
        </Consumer>

    )
};*/

let mapStateToProps = (state)=>{
    return{
        value:state.messageData.messageText,
        names:state.messageData.names,
        messages:state.messageData.messages
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        onSendMessage:()=>{
            dispatch(addMessageActionCreator())
        },
        onMessageChange:(text)=>{
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;