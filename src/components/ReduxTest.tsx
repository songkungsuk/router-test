import { useReducer } from 'react';
import { legacy_createStore } from 'redux';

const reducer = (state: any, action: any) => {
    return state;
}

const init = {
    num: 0
}

legacy_createStore(reducer, init);

export const ReduxTest = () => {
    return (
        <div>
            <button>+</button>
            <span>0</span>
        </div>
    )
}