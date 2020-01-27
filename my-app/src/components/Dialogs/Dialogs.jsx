import React from 'react';
import d from  "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator,UpdateMessageBodyCreator} from './../redux/State';


const Dialogs=(props)=>{
    
    let dialogsElements=props.state.dialogsData.map(d=><DialogItem name={d.name} id={d.id} />);
    let messagesElements=props.state.messageData.map(m=> <Message message={m.message}/>)
    let newMessageBody=props.state.newMessageBody;
   let onSendMessageClick=()=>{
    props.store.dispatch(sendMessageCreator());
   }
   let onNewMessageChange=(e)=>{
       let body= e.target.value;
       props.store.dispatch(UpdateMessageBodyCreator(body));
   }
    return(
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
              
            </div>
            <div className={d.messages}>
              <div>{messagesElements}</div>  
              <div> 
                  <div>  <textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                  <div> <button onClick={onSendMessageClick}>Send</button></div>
              </div>
                
                </div>
               
                
        </div>
    );
}
export default Dialogs;