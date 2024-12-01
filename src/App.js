import React from 'react'
import Counter from './components/Counter';
import User from './components/User';
import GetComponent from './components/API_generic/GetComponent'

export default function App() {
  return (
    <div>
      Hello
      <Counter />
      <User/>
      {/* API */}
      <GetComponent/>
    </div>
  )
}
