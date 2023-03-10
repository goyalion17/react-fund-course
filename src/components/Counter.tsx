import React, { useState } from "react";

export const Counter = function () {
  const [count, Setcount] = useState(0);

  function increment() {
    Setcount(count + 1);
  }

  function decrement() {
    Setcount(count - 1);
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
};
