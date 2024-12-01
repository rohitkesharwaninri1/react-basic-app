import React from 'react'

export default function HOC(ChildComp) {
  return function(props){
     return (
        <div style={{backgroundColor:"#dadada", padding:'10px'}}>
         <p>This is Wraped in HOC Start</p>
            <ChildComp {...props} name={"Mohit"}/>
         <p>This is Wraped in HOC End</p>
        </div>
     )
  }
}
