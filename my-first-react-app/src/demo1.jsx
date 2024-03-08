import { useState } from "react";

function Practice() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [lastInputValue, setLastInputValue] = useState(0);
            
    return (
        <>
            <label>Input Number: {count}</label><br /><br />
            <input type="number" onChange={(e) => setInputValue(parseInt(e.target.value, 10))}/>

            <button onClick={() => setLastInputValue(inputValue)}>Add</button><br /><br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(inputValue + lastInputValue)}>{lastInputValue}</button>
        </>
    );
}

export default Practice;