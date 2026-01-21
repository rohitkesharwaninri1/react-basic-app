import React from "react";
import VirtualizedList from "./features/VirtualizedList.tsx";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <h3 style={{ padding: 12 }}>1,000,000 Row List (Real Public API)</h3>
      <VirtualizedList />
    </div>
  );
}
