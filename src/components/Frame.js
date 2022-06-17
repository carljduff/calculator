import React from "react";
import { useState } from 'react';
import "../css/frame.css";

const Frame = () => {
    const [input, setInput] = useState(0)

    const inputHandler = (e) => {
        console.log(e.target.innerText)
        setInput(e.target.innerText)
    }

  return (
    <div className="frame">
      <div className="view">
        <h1 className="digits">{input}</h1>
      </div>
      <div className="btn-frame">
        <button className="btn">+/-</button>
        <button className="btn">AC</button>
        <button className="btn">%</button>
        <button onClick={inputHandler} className="btn">/</button>
        <button onClick={inputHandler} className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn">X</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn">-</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">+</button>
        <button className="btn-0">0</button>
        <button className="btn">.</button>
        <button className="btn">=</button>
      </div>
    </div>
  );
};

export default Frame;
