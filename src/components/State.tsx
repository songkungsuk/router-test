import { useState } from "react"

export const State = () => {
    const [count, setCount] = useState(0);
    const down = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0)
    }
    const up = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={up}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={down}>-</button><br />
            <span>{count}</span>
        </div>
    )
}