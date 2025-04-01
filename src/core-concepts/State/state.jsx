import React, { useState } from 'react';
export function  Statexample(){
    useState(0);
    const [count, setCount] = useState(10);
    console.log("State Example")
    const handlecount = () => {
        setCount(count + 1);
        if(count > 15){
            setCount(80);
        }
    }
    return(
        <div>
            <h1>State Example</h1>
            <p>This is a simple example of using state in a React component.</p>
            <h3>Counter {count}</h3>
            <button onClick={handlecount}>Increment</button>
        </div>
    )
}