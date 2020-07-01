import React from 'react';
// import ReactDOM from 'react-dom';

function Tick(){
  const element = (
    <div>
      <h2 className="App">Local Time</h2>
      <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  );
  // ReactDOM.render should only be called once
  // don't do this
  // ReactDOM.render(element, document.getElementById('root2'));
}

export default Tick;
// ReactDOM.render should only be called once!
// don't do this
// setInterval(Tick, 1000);