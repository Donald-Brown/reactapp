import React from "react";
import "./App.css";
import supernova from './img/supernova.jpg';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1 className="App">Hello, {formatName(user)}!</h1>;
  }
  return <h1 className="App">Hello, Stranger.</h1>;
}

const hp = {
  firstName: "Super",
  lastName: "Nova",
};

const img = <img src={supernova} height='400' width='auto' alt="supernaove" />

const element = getGreeting(hp);

function App() {
  return (
    <div>
      {element}
      <h2>Good to see You</h2>
      {img}
    </div>
  );
}

export default App;
