import React from 'react';
import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const dispatch= useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(Password != ConfirmPassword)
            return alert('비밀번호와 비밀번호 확인이 같아야합니다.');

        let body = {
            email: Email,
            password: Password,
            name: Name,
        }

        dispatch(registerUser(body))
        .then(res => {
            if(res.payload.success) {
                props.history.push('/login');
            }
            else
                alert('Error');
        })
        
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
                <label>Name</label>
                <input type="text" value={Name} onChange = {(e)=> {setName(e.currentTarget.value)}}/>
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange = {(e)=> {setConfirmPassword(e.currentTarget.value)}}/>
            </form>
            <br />
            <button>
                회원가입
            </button>
        </div>
    )
}

export default RegisterPage