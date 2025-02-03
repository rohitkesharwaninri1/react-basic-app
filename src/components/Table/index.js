import React from 'react';
import { Link } from "react-router"

export default function Table({data=[]}) {
  return (
    <table>
      <thead>
      {data.length>0 && <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>}
      </thead>
      <tbody>
        {
         data.length>0 && data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td> <Link to={item.url}>{item.url}</Link></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
