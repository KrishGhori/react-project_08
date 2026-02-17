import { useState } from "react";
import "./App.css";
import LoggerComponent from "./Components/LoggerComponents";
import TimeComponents from "./Components/TimeComponents";
import DataFetcher from "./Components/DataFetcher";
import ResizeComponents from "./Components/ResizeComponents";
import MultiEffectComponents from "./Components/MultiEffectComponents";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  return (
    <div className="app">
      <h1 className="main-title">React useEffect Playground</h1>

      <div className="card">
        <LoggerComponent />
      </div>

      <div className="card">
        <TimeComponents />
      </div>

      <div className="card">
        <DataFetcher />
      </div>

      <div className="card">
        <ResizeComponents />
      </div>

      <div className="card">
        <MultiEffectComponents />
      </div>

      <div className="card counter-box">
        <h2>Manual Counter Section</h2>
        <button onClick={() => setCount(count + 1)} className="btn">
          Update Count
        </button>
        <p>Count: {count}</p>

        <button onClick={() => setTotal(total + 1)} className="btn secondary">
          Update Total
        </button>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default App;
