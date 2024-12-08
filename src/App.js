import style from "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let timer;
    if (timerOn) {
      timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter, timerOn]);

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>Stop Watach</h1>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p className="tag">Made by Rohit Kesharwani with ❤️</p>
    </div>
  );
}
