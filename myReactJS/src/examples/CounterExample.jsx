import { useState } from 'react';

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter Example</h2>
      <p>React state updates the UI immediately as users interact.</p>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button onClick={() => setCount((value) => value - 1)}>-</button>
        <strong>{count}</strong>
        <button onClick={() => setCount((value) => value + 1)}>+</button>
      </div>
    </section>
  );
}

export default CounterExample;
