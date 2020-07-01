import React from "react";
import s from "./Dialogs.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";


const Dialogs = (props) => {
    let getNewElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = getNewElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };


    let messages = props.data.messages.map(m => <Message text={m.message} />);

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.data.names.map(item => (<Dialog name={item.name} id={item.id}/>))}
                </div>
                <div className={s.messages}>
                    {messages}

                </div>
                <div className={s.send}>
                    <textarea onChange={onMessageChange} ref={getNewElement} value={props.data.messageText}
                              onKeyPress={event => {
                                  if (event.key === "Enter") {
                                      sendMessage()
                                      event.preventDefault();
                                  }
                              }}/> <br/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default Dialogs;