import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementBy10 } from '../store/Slice/counterSlice';
import { handleSaveName } from '../store/Slice/userSlice';

export default function User() {
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.user.name);
    const [localName, setLocalName] = useState("")

  return (
    <div>User
        <input value={localName} onChange={(e) => { setLocalName(e.target.value); }} />
        <button onClick={()=>dispatch(handleSaveName(localName))}>Submit data</button>
        <p> Local Name : {localName}</p>
        <p> Redux Name : {name}</p>
    </div>
  )
}
