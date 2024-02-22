import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    let result = 1;
    const expensiveValue = useMemo( ()=>{
        for (let index = 1; index <= input; index++) {
            result *= index;
        }
        return result;
    }, [input]); 
   

    return (
        <div>
            <input 
                type="number" 
                placeholder="Enter any number to find factorial"
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}