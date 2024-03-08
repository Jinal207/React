import React, { useContext } from 'react'
import { UserContext } from '../hooks/useContext';

export default function First() {
  const data=useContext(UserContext);
  console.log(data);
  return (
    <div>
      <h1>First</h1>
      {data.name}
    </div>
  )
}
