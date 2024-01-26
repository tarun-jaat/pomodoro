import React, { useState, useEffect } from "react";
import './Pomodoro.css'

function Clock() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount(new Date())
    },1000)
  },[count])

  return (
    <div className="clock">
      <h3>{count.toLocaleString()}</h3>
    </div>
  );
}

export default Clock;