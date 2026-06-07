"use client";

import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button className="counter-button" onClick={() => setCount((prev) => prev + 1)}>
      Clicked {count} times
    </button>
  );
}
