import { useSelector } from "react-redux";

export const Left3 = () => {
    
    const num = useSelector((state:any)=>state.num);
    return (
        <div>
            <h1>Left3 {num}</h1>
        </div>
    )
}