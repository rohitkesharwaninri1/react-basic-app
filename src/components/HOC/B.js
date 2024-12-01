import React from 'react'
import HOC from './HOC';

function B(props) {
  return (
    <div>B Component {props.name}  {props?.lastName}</div>
  )
}
export default HOC(B)
