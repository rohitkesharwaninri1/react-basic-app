import React from 'react'
import  './index.css';

export default function Button({text, onclick}) {
  return (
    <button className='btn' onClick={onclick}>Load Data</button>
  )
}
