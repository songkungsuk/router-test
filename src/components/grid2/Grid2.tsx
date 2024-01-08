import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { Left1 } from "./Left1";
import { Rright1 } from "./Rright1";

function reducer(curState: any, action: any) {
    {/* 처음 함수를 호출하면 curState 에 추가된건없어서 이구문이 실행됨 첫 return 까지 */}
    if (curState === undefined) {
        return {
            num: 1
        }
    }
    {/* ...curState 는 딥카피 */}
    const newState = { ...curState }
    if(action.type === 'UP'){
        newState.num++;
    }else if(action.type === 'DOWN'){
        newState.num--;
    }
    
    return newState;
}
const store = legacy_createStore(reducer);




export const Grid2 = () => {
    return (
        <div id="container">
            <h1>Grid2</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1/>
                    <Rright1/>
                </Provider>
            </div>
        </div>
    )
}