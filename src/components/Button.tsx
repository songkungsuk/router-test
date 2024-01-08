import { styled } from "styled-components"
import React, { useReducer } from 'react';

export const Buttons = () => {
    const SimpleButton1 = styled.button`
        color:red;
        
    `;

    function reducer(old: number, action: string): any {
        if (action === 'up') {
            return old + 1;
        } else if (action === 'down') {
            return old - 1;
        }
    }

    {/* useReducer는 어떤 함수를 실행할지 / 초기값 old => 0  */ }
    const [num, dispatch] = useReducer(reducer, 0);

    function click1() {
        dispatch('up');
    }

    function click2() {
        dispatch('down');
    }

    return (
        <div>
            <SimpleButton1 onClick={click1}>{num}</SimpleButton1> &nbsp;
            <SimpleButton1 onClick={click2}>{num}</SimpleButton1>
        </div>
    )
}