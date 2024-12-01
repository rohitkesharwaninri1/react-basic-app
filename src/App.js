import React from 'react'
import Counter from './components/CustomHook/Counter';
import A from './components/HOC/A';
import B from './components/HOC/B';
import C from './components/HOC/C';
import HOC from './components/HOC/HOC';
import SimpleReduxCounter from  './components/SimpleReduxCounter/SimpleReduxCounter';
// const EnhancedA = HOC(A);

export default function App() {
  return (
    <div>

      {/* Hooks */}
      {/* <Counter/> */}


      {/* HOC */}
      {/* <EnhancedA lastName="kesharwani"/>
      <B lastName="Gupta"/>
      <C/> */}

      {/* SimpleReduxCounter */}
      <SimpleReduxCounter/>

    </div>
  )
}
