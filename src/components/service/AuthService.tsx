import axios from "axios";
import { User } from "../type/User.type";

class AuthService{
    login = async (user:User) =>{
        const param = {
            uiId : user.uiId,
            uiPwd : user.uiPwd
        }

        const res = await axios.post('http://localhost:80/api/login', JSON.stringify(param),{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.data);
        return res;
    }
}

export default new AuthService();