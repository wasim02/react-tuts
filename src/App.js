import { useState } from 'react';
import './App.css';

function App() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div className="App">
      <h2>React Hooks Tutorial</h2>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
      <button onClick={() => { setCount1(c1 => c1 + 1); setCount2(c2 => c2 + 1); }}>+</button>
    </div>
  );
}

export default App;
