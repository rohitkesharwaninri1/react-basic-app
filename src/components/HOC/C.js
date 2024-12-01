import React from 'react';
import HOC from './HOC';

function C(props) {
  return (
    <div>C Component {props.name} {props?.lastName}</div>
  )
}

export default HOC(C);