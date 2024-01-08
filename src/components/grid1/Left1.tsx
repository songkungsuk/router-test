import { Props } from "../Props"
import { Left2 } from "./Left2"


export const Left1 = (prop: Props) => {
    return (
        <div>
            <h1>Left1 : {prop.num}</h1>
            <Left2 num={prop.num}></Left2>
        </div>
    )
}