import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [Add, setAdd] = useState('');

  const calcSum = (event) => {
    event.preventDefault();
    console.log(event);

    if(num1===0 || num2===0){
      alert("please enter your num1 and num2")
    }
    else {
      let Add = parseInt(num1) + parseInt(num2);
      setAdd(parseInt(Add))
    }
  }

  return (
    <>
    <div className='app'>
      <div className='container'>
        <h2 className='center'>Sum Calculator</h2>
        <form onSubmit={calcSum}>
          <div>
            <label>Number 1</label>
            <input type='text' placeholder='Enter Number1 value' value={num1} onChange={(e) => setNum1(e.target.value)}/>
          </div>
          <div>
            <label>Number 2</label>
            <input type='text' placeholder='Enter Number2 value' value={num2} onChange={(e) => setNum2(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>
          <div className='center'>
            <h3>Your Sum is:{Add}</h3>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;