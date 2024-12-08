import "./App.css";
import React, { useState } from "react";
export default function App() {
  const [grid, setGrid] = useState(5);
  const data = Array.from({ length: grid * grid }, (_, i) => i);
  return (
    <div className="app">
      <h4>Enter Grid Size</h4>

      <input
        value={grid}
        type="number"
        onChange={(e) => setGrid(e.target.value)}
      />
      {grid && (
        <div
          className="grid-container"
          style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
        >
          {data.map((i) => {
            const row = Math.floor(i / grid);
            const col = i % grid;
            // console.log("i", i, "row", row, "col", col, "(row + col) % 2 === 0", (row + col) % 2 === 0)
            const backgroundColor =
              (row + col) % 2 === 0 ? "#434342" : "#E6E6E6";
            return (
              <div
                className="grid-item"
                style={{
                  backgroundColor: backgroundColor,
                }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  )
}
