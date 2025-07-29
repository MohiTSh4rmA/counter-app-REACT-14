import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-box">
        <h1>React Counter</h1>
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)} className="btn red">-</button>
          <button onClick={() => setCount(0)} className="btn gray">Reset</button>
          <button onClick={() => setCount(count + 1)} className="btn green">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
