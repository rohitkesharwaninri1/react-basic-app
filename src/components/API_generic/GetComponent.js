import React, { useEffect, useState } from 'react';
import { getAPI } from './api';

const MyComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAPI('https://jsonplaceholder.typicode.com/todos/1');
      console.log("qerwrtetrg", result)
      if(!result.error){
        setData(result.data);
      }
      else{
        setData("Try again");
      }
    };

    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default MyComponent;
