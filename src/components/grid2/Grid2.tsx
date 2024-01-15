import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { Left1 } from "./Left1";
import { Rright1 } from "./Rright1";
import { configureStore, createSlice } from "@reduxjs/toolkit";
/*
function reducer(curState: any, action: any) {
    // ...curState 는 딥카피 
    if (action.type === 'UP') {
        return { ...curState, num: curState.num + Number(action.step) }
    } else if (action.type === 'DOWN') {
        return { ...curState, num: curState.num - Number(action.step) }
    }
    return curState;
}

const init = {
    num: 1
}
const store = legacy_createStore(reducer, init);
*/
const numSlice = createSlice({
    name: 'numSlice',
    initialState: {
        num: 1
    },
    reducers: {
        up: (state, action: any) => {
            state.num += action.step;
        },
        down: (state, action: any) => {
            state.num -= action.step;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: numSlice.reducer
    }
});

export const Grid2 = () => {
    return (
        <div id="container">
            <h1>Grid2</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1 />
                    <Rright1 />
                </Provider>
            </div>
        </div>
    )
}