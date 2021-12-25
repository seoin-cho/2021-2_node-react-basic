import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
    const dispatch = useDispatch();

    function AuthenticationCheck(props) {
        useEffect(() => {
            dispatch(auth()).then(res => {
                console.log(res.data);
                if(!res.payload.isAuth) {
                    if(option)
                        props.history.push("/login");
                }
                else {
                    if(adminRoute && res.payload.isAdmin)
                        props.history.push('/');
                    else {
                        if(!option)
                            props.history.push('/');
                    }
                }
                     });
            Axios.get('/api/users/auth')
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck;
}