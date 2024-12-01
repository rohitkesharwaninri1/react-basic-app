import { useState, useCallback } from "react";
import Todos from "./Todos";

export default function UseCallbackComponent(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // without callback
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  //with call
  const addTodo = useCallback(()=>{
    setTodos((t) => [...t, "New Todo"]);
  }, [])

  return (
    <>
      {/* Child components */}
      <Todos todos={todos} addTodo={addTodo} />
      
      <hr />

      <div>
        Count: {count} <br/>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

