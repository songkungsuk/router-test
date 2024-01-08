import { Props } from "../Props"


export const Rright3 = (prop: Props) => {
    return (
        <div>
            <h1>Rright3 : {prop.num}</h1>
            <button onClick={()=>{
                if(prop.onAdd){
                    prop.onAdd();
                }
            }}>+</button>
        </div>
    )
}