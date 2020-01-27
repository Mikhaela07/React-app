import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
        
    return (
       <div className={p.item}>
                <img src="https://memepedia.ru/wp-content/uploads/2017/11/23794942_2042487729364058_7428960681077810545_n.jpg" />
                {props.m}
                <div>
                <span>Like</span> {props.likesCount}
                </div>
                
        </div>
        );
    
}
export default Post;