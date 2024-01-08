import { Props } from "../Props"
import { Rright2 } from "./Rright2"


export const Rright1 = (prop: Props) => {
    return (
        <div>
            <h1>Rright1 : {prop.num}</h1>
            <Rright2 num={prop.num} onAdd={prop.onAdd}></Rright2>
        </div>
    )   
}