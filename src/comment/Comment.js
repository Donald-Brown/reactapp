import React from 'react';
import UserInfo from './UserInfo';

function Comment(props){
  return (
      <div className="Comment">
        <UserInfo user={props.user} />
        <div className="comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
  );
}

export default Comment;