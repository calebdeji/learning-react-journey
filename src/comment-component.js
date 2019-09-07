import React from 'react'

/**
 * 
 * Extracting components might seem like grunt work at first, 
 * but having a palette of reusable components pays off in larger apps. 
 * A good rule of thumb is that if a part of your UI is used several times 
 * (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment),
 *  it is a good candidate to be a reusable component.} date 
 */

const formatDate = (date)=>{
    return date.toLocaleDateString();
}

const Userinfo = (props)=>{
    return(
        <div className="user-info">
            <img className = "avatar"
                src = {props.user.avatarUrl}
                alt = {props.user.name}
            />
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    )
}

export default function Comment(props){
    return (
        <div className="comment-section">
            <Userinfo user={props.author}/>
            <div className="comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}