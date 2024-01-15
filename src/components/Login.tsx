import { ChangeEvent, useState } from "react";
import { User } from "./type/User.type";
import AuthService from "./service/AuthService";
import { useNavigate } from "react-router-dom";



export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        uiId: '',
        uiPwd: '',
    });
    const changeUser = (evt: ChangeEvent<HTMLInputElement>) => (
        setUser({
            ...user,
            [evt.target.id]: evt.target.value
        })
    )
    const login = async () => {
        try {
            const res: any = await AuthService.login(user);
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data));
            alert('로그인이 성공하였습니다.');
            navigate('/');
        } catch (error:any) {
            console.log(error);
            if(error.response.status === 401){
                alert('아이디나 비밀번호를 확인해주세요.');
                setUser({
                    uiId:'',
                    uiPwd:''
                })
            }
        }

    }
    return (
        <div>
            <input type="text" id="uiId" value={user.uiId} onChange={changeUser}></input>
            <input type="password" id="uiPwd" value={user.uiPwd} onChange={changeUser}></input>
            <button onClick={login}>로그인</button>
        </div>
    )
}
