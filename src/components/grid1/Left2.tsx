import { Left3 } from "./Left3"
import { Props } from "../Props"

export const Left2 = (prop: Props) => {
    return (
        <div>
            <h1>Left2 : {prop.num}</h1>
            <Left3 num={prop.num}/>
        </div>
    )
}