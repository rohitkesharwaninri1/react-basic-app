import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // Simulating an expensive computation
  const expensiveCalculation = (num) => {
    console.log("Performing expensive computation...");
    for (let i = 0; i < 10000; i++) {}
    return num * 2;
  };

    // with useMemo
    const computedValue = useMemo(()=>{
        return expensiveCalculation(count)
    }, [count])
  
    // Without useMemo
    // const computedValue = expensiveCalculation(count)


  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}

export default UseMemoComponent;
