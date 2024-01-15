import { useState } from "react"
import { Alert, Button } from "react-bootstrap";

export const AlertTest = () =>{
    const [show, setShow] = useState(true);
    const alert = (
        <Alert variant="info" onClose={()=> setShow(false)} dismissible>
            <Alert.Heading>Hello</Alert.Heading>
            <p>
                안녕하세요 반갑습니다.
            </p>
        </Alert>
    )
    if(show){
        return alert;
    }

    return (
        <Button onClick={()=> setShow(true)}>눌러주세요</Button>
    )
}