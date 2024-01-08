import { useDispatch } from "react-redux"


export const Rright3 = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Rright3</h1>
            <button onClick={() => {
                dispatch({ type: 'UP' })
            }}>+</button>

            <button onClick={() => {
                dispatch({ type: 'DOWN' })
            }}>-</button>
        </div>
    )
}