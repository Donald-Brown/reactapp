import React from 'react';
// import avatar from '../img/head2.jpg';

function Avatar(props){
  return (
    <img className="Avatar"
      src={props.user.avatar}
      alt={props.user.firstName + " " + props.user.lastName}
    />
  );
}

export default Avatar;