import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handle = {
    plus: () => {
      setCount(count + 1);
    },
    minus: () => {
      setCount(count - 1);
    },
  };

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <div>
        <button onClick={handle.plus}>увеличить +</button>
        <button onClick={handle.minus}>уменьшить -</button>
      </div>
    </div>
  );
}

export default App;
