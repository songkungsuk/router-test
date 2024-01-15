import { useSelector } from "react-redux";
import { Left3 } from "./Left3"

export const Left2 = () => {
    
    const num = useSelector((state:any)=>state.counter.num);
    return (
        <div>
            <h1>Left2 {num}</h1>
            <Left3/>
        </div>
    )
}