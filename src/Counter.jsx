import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  console.log(count);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncrease}>Increase:</button>
      &nbsp; &nbsp;
      <button onClick={handleDecrease}>Decrease:</button>
    </div>
  );
}
