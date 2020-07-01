import React from "react";
// import "./App.css";
import supernova from './img/supernova.jpg';
import Welcome from './Welcome';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1 className="App">Hello, {formatName(user)}!</h1>;
  }
  return <h1 className="App">Hello, Stranger.</h1>;
}

const sn = {
  firstName: "Super",
  lastName: "Nova",
};

const img = <img src={supernova} height='400' width='auto' alt="supernaove" />

const element = getGreeting(sn);

function Supernova() {
  return (
    <div>
      <Welcome name="Amy" age="49" />
      {element}
      <h2>Good to see You</h2>
      {img}
    </div>
  );
}

export default Supernova;