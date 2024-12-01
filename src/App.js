import React from 'react'
import Counter from './components/Counter';
import UseMemoComponent from './components/UseMemoComponent';
import UseCallbackComponent from './components/UseCallbackComponent';

export default function App() {
  return (
    <div>
        {/* custom hook */}
        {/* <Counter/> */}


        {/* useMemo hook */}
        {/* <UseMemoComponent/> */}
        

          {/* useCallback hook */}
          <UseCallbackComponent/>
    </div>
  )
}
