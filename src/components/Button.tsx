//import { useReducer } from 'react';
import { Button } from "react-bootstrap";

export const Buttons = () => {

    /*
    function reducer(old: number, action: string): any {
        if (action === 'up') {
            return old + 1;
        } else if (action === 'down') {
            return old - 1;
        }
    }

    /* useReducer는 어떤 함수를 실행할지 / 초기값 old => 0  
    const [num, dispatch] = useReducer(reducer, 0);

    function click1() {
        dispatch('up');
    }

    function click2() {
        dispatch('down');
    }
    */ 
    return (
        <div>
            <p>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Primary</Button>
                <Button variant="info">Dark</Button>
                <Button variant="link">Link</Button>
                <Button variant="light">Light</Button>
            </p>
            <p>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Primary</Button>
                <Button variant="outline-info">Dark</Button>
                <Button variant="outline-link">Link</Button>
                <Button variant="outline-light">Light</Button>
            </p>
            <p>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Primary</Button>
                <Button variant="info">Dark</Button>
                <Button variant="link">Link</Button>
                <Button variant="light">Light</Button>
            </p>
        </div>
    )
}