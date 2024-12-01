import React from 'react'
import HOC from './HOC';

function A(props) {
  return (
    <div>A Component {props.name} {props?.lastName}</div> 
  )
}

export default A