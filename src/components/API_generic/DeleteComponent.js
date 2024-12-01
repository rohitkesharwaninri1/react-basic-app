import React, { useState } from 'react';
import { deleteAPI } from './api';

const MyComponent = () => {
  const [idToDelete, setIdToDelete] = useState('');

  const handleDelete = async () => {
    const result = await deleteAPI('https://api.example.com/data', idToDelete);
    console.log('Data deleted:', result);
  };

  return (
    <div>
      <input value={idToDelete} onChange={(e) => setIdToDelete(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MyComponent;
