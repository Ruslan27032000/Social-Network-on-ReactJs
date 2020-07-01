import React from "react";
import s from "./Dialogs.module.css";
import {BrowserRouter} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let getNewElement = React.createRef();

    let sendMessage = () => {
        props.onSendMessage();
    }

    let MessageChange = () => {
        let text = getNewElement.current.value;
        props.onMessageChange(text);
    };


    let messages = props.messages.map(m => <Message text={m.message} />);

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.names.map(item => (<Dialog name={item.name} id={item.id}/>))}
                </div>
                <div className={s.messages}>
                    {messages}
                </div>
                <div className={s.send}>
                    <textarea onChange={MessageChange} ref={getNewElement} value={props.value}
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