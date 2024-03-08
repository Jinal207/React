import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { chnageVal } from '../../store/adminslice';

export default function Contact() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
      return(()=>{
        console.log("contact is closed");
      })
    });
    const obj=useSelector(data=>data);
  return (
   <>
    <h1>Contact {obj?.abc?.value}</h1>
    <button onClick={()=>dispatch(chnageVal())}>Increment</button>
    <button onClick={()=>navigate("/abc")}>about</button>
   </>
  ) 
}
