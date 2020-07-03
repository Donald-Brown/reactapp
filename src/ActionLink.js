import React from 'react';

function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log('Link was clicked');
  }

  return (
    <a href="https.react.com" onClick={handleClick}>
      Click me!
    </a>
  );
}

export default ActionLink;