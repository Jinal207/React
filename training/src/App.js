import { useState } from "react";
import "./App.css";
  // import UseEffect from "./hooks/useEffect";
  import Form from "./form/form";
import Second from "./component/second";
import Third from "./component/third/third";
import { UserContext } from "./hooks/useContext";
import First from "./component/router/first";
import ClassComponent from "./component/class";
// import { FirstComponent } from './first-component';
/**
 * 
 * hooks
 * useState
 * useEffect
 * useContext
 * useRef
 * useReducer
 */
/***
 * useEffect(()=>{
 * },[])
 * 
 */
function App() {
  let obj={
    name:"harshita",
    age:"21"
  }
  let[value,setName]=useState(obj)
 
  function handelClick(){
setName("sneha")
  console.log(value,"fun");

  }
  console.log(value,"out");
  return (
    <>
    <ClassComponent/>
    {/* <First/> */}
   {/* <UserContext.Provider value={{name:"harshita"}}>
   <First />
    <Second/>

   </UserContext.Provider>
    <Form/> */}
    {/* <UseEffect/>
    <h1>{value?.name}</h1>
    <button onClick={(()=>handelClick())}>Click</button>
    {
      value==="sneha"&&"<h1>Hello sneha</h1>"
    }
      <First title={obj} color="red"/> */}
      {/* <First title="second"/>
      <First title="third" color="green"/>
      <First /> */}
    </>
  );
}

export default App;
