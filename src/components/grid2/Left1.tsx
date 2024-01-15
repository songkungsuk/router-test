import { Left2 } from "./Left2"
import { useSelector } from "react-redux"


export const Left1 = () => {
    const num = useSelector((state:any)=>state.counter.num);
    return (
        <div>
            <h1>Left1 {num}</h1>
            <Left2></Left2>
        </div>
    )
}