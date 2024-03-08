import React from 'react'
import { Link, NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function About() {
    const {name}=useParams();
    const navigate=useNavigate();
    console.log(navigate);
    const location =useLocation();
    console.log(location);
    // console.log(params);

  return (
   <>
   <Link to="/">Home</Link>
   <Link to="/:name" style={{textDecoration:"none",fontSize:"20px"}}>Home</Link>
   <NavLink to="/:name" style={{textDecoration:"none",fontSize:"20px",marginLeft:"15px"}}>NavLink</NavLink>
   <h1>{name}</h1>
   <button onClick={()=>navigate("/contact")}>Redirect</button>
   </>
  )
}
    