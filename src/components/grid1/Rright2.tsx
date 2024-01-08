import { Props } from "../Props"
import { Rright3 } from "./Rright3"


export const Rright2 = (prop: Props) => {
    return (
        <div>
            <h1>Rright2 : {prop.num}</h1>
            <Rright3 num={prop.num} onAdd={prop.onAdd}></Rright3>
        </div>
    )
}