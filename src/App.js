import React from "react";
import { Pomodoro } from "./components/Pomodoro";
// import { Header } from "./components/Header";
import "./App.css";
// import Quotes from "./components/Qutos";
import Clock from "./components/Clock";
function App() {
  return (
    <div id="main">
      <div className="Section1">
        <Clock />
        <Pomodoro />
      </div>
      {/* <Quotes/> */}
      {/* <Header/> */}
    </div>
  );
}

export default App;
