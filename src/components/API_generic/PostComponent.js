import React, { useState } from 'react';
import { postAPI } from './api';

const MyComponent = () => {
  const [inputData, setInputData] = useState('');

  const handleSubmit = async () => {
    const dataToSend = { name: inputData };
    const result = await postAPI('https://api.example.com/data', dataToSend);
    console.log('Data posted:', result);
  };

  return (
    <div>
      <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyComponent;
