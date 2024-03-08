import React, { useContext } from 'react'
import { UserContext } from '../../hooks/useContext';

function Third() {
  const {name}=useContext(UserContext);
  return (
    <div>
      <h1>Third</h1>
      <h2>{name}</h2>
    </div>
  )
}


export default Third;