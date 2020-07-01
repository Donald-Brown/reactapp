import React from 'react';
import ReactDOM from 'react-dom';

function Tick(){
  const element = (
    <div>
      <h1 className="App">hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root2'));
}

export default Tick;