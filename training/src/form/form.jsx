import { useRef, useState } from "react";

function Form(){
    const[name,setName]=useState("sneha");
    const[email,setEmail]=useState("Sneha@gmail.com");
    const[data,setData]=useState([]);
    const username=useRef("");
function handleName(){
    console.log(username.current.value);
    // console.log(e.target.value);
    setName(username.current.value)
}
function handleEmail(e){
    console.log(e.target.value);
    setEmail(e.target.value)
}
function handleSubmit(e){
    e.preventDefault();
    console.log(name);
    console.log(email);
    let obj={
        name:name,
        email:email
    }
    data.push(obj)
}
console.log(data);
    return(
        <>
           <form>
            Name:
            <input type="text" placeholder="Enter Name"  value={name} onChange={()=>handleName()} ref={username}/><br />
            Email:
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>handleEmail(e)}/><br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
           </form>
        </>
    )
}

export default Form;