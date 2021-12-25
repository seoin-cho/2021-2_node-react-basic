import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch= useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser(bdy))
        .then(res => {
            if(res.payload.loginSuccess) {
                props.history.push('/');
            }
            else
                alert('Error');
        })

        Axios.post('/api/users/login', {
            email: Email,
            password: Password,
        })
        .then(res => {

        });
    }

    return (
        <div styel={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh',
        }}>
            <form style={{display:'flex', flexDirection:'column'}} 
            onSubmit = {onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange = {(e)=> {setEmail(e.currentTarget.value)}}/>
                <label>Password</label>
                <input type="password" value={Passsword} onChange = {(e)=> {setPassword(e.currentTarget.value)}}/>
            </form>
            <br />
            <button>
                Login
            </button>
        </div>
    )
}

export default LoginPage