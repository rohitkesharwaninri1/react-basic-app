import React, { useState } from "react";
import Accordion from './components/Accordion'

const App = () => {
  const accordionData = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];

  return (
    <div>
      <h1>React Accordion Example</h1>
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
