import React from "react";
// import "./App.css";
import Supernova from "./Supernova";
import Welcome from "./Welcome";
// import Avatar from './comment/Avatar';
// import UserInfo from './comment/UserInfo';
import Comment from "./comment/Comment";
import donAvatar from "./img/head2.jpg";
import Clock from "./Clock";

let don = {
  firstName: "Don",
  lastName: "Brown",
  avatar: donAvatar,
  age: 44,
};

let today = new Date();
let todaysDay = today.toDateString();

function App() {
  return (
    <div>
      <Supernova />
      <Welcome name="Mary" age="54" />
      <Welcome name="Harry" age="46" />
      <Comment user={don} text="Hi" date={todaysDay} />
      <Clock />
    </div>
  );
}

export default App;
