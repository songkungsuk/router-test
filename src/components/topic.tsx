import axios from 'axios';
import { useEffect } from 'react';
import { User } from './type/User.type';

export const Topic = () => {
    const getCarts = async () => {
        try {
            const userJson = localStorage.getItem('user');
            if(!userJson){
                return [];
            }
            const user:User = JSON.parse(userJson);


            const res = await axios.get('http://localhost:80/shopping-carts', {
                headers:{
                    'Authorization' : user.token
                }
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }  
        
    }
    useEffect( ()=>{
        getCarts();
    });
    return (
        <div>
            <h2>Topic</h2>
        </div>
    )
}