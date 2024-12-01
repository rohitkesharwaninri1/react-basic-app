import React, { useState } from 'react';
import { putAPI } from './api';

const MyComponent = () => {
  const [inputData, setInputData] = useState('');

  const handleUpdate = async (id) => {
    const dataToUpdate = { name: inputData };
    const result = await putAPI(`https://api.example.com/data/${id}`, dataToUpdate);
    console.log('Data updated:', result);
  };

  return (
    <div>
      <input value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <button onClick={() => handleUpdate(1)}>Update</button> {/* Replace 1 with the actual ID */}
    </div>
  );
};

export default MyComponent;
