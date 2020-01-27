import Message from "../Dialogs/Message/Message";

const add='ADD-POST';
const update='UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';
let store={
    _state:{
        ppage:{
            posts:[{id:1, m:"HellO!",likesCount:10},
                     {id:2, m:"Hey Privet ",likesCount:0}],
            newPostText:''},
        dpage:{
                dialogsData:[{id:1, name:'Miki'},
                     {id:2, name:'Tanya'}],
            messageData:[ {id:1,message:'Help'},
                     {id:2,message:'Cool'}]},
    
    newMessageBody:'',
},
    _callSubscriber(){
        console.log("State was changed");
},
 subscribe(observer) {
    this._callSubscriber=observer;
},
 getState(){
     return this._state;
 },
 dispatch(action ){
    if(action.type===add){
        let newPost={
            id:3,
            m:this._state.ppage.newPostText,
            likesCount:8
        };
        this._state.ppage.posts.push(newPost);
        this._state.ppage.newPostText='';
        this._callSubscriber(this._state);
    }
    else if (action.type===update){
        this._state.ppage.newPostText=action.newText;
        this._callSubscriber(this._state);
    }
    else if(action.type===UPDATE_NEW_MESSAGE_BODY){
        this._state.dpage.newMessageBody=action.body; 
        this._callSubscriber(this._state);
    }
    else if(action.type===SEND_MESSAGE){
        let body=this._state.dpage.newMessageBody; 
        this._state.dpage.newMessageBody='';
        this._state.dpage.messageData.push({id:3,message:body});
        this._callSubscriber(this._state);
    }
 }
 
}
export const addPostActionCreator=()=>{
    return{
        type:add
    }
}
export const UpdateNewPostTextActionCreator=(text)=>{
    return{
        type: update, newText:text
    }
}
export const sendMessageCreator=()=>{
    return{
        type: SEND_MESSAGE
    }
}
export const UpdateMessageBodyCreator=(body)=>{
    return{
        type: UPDATE_NEW_MESSAGE_BODY, body:body
    }
}
export default store;
window.store=store;