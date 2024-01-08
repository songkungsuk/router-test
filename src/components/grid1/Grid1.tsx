import { useState } from "react"
import { Left1 } from "./Left1";
import { Rright1 } from "./Rright1";

export const Grid1 = () => {
    const [num, setNum] = useState(0);
    return (
        <div id="container">
            <h1>Grid1 : {num}</h1>
            <div id="grid">
                <Left1 num={num}></Left1>
                <Rright1 num={num} onAdd={()=>{setNum(num+1)}}></Rright1>
            </div>
        </div>
    )
}