import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,UpdateNewPostTextActionCreator} from './../../redux/State';

const MyPosts = (props) => {
 
 let postsElements=props.posts.map(p=><Post m={p.m} likesCount={p.likesCount}/>)
 let newPostEl=React.createRef();
 let addPost=()=>{
    let text=newPostEl.current.value;
     props.dispatch(addPostActionCreator());
     
 } 
 let onPostChange=()=>{
     let text=newPostEl.current.value;
     let action=UpdateNewPostTextActionCreator(text);
     props.dispatch(action);
 }   

    return (
       
        <div className={p.block}>my posts
            <div>
           <div> <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/></div>
            <button onClick={addPost} >Add post</button>
            </div>
    
            <div className={p.posts}>
                {postsElements}
                
            </div>
        </div>);
    
}
export default MyPosts;