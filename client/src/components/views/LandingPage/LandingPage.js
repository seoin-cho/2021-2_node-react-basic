import React, {useEffect} from 'react';
import axios from 'axios';

function LandingPage() {
    useEffect(()=> {
        axios.get('/api/hello')
        .then(res => console.log(res.data));
    }, [])
    
    return (
        <div styel={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh',
        }}>
            <h2>시작페이지</h2>
            <button onClick={(e)=> {axios.get('/api/users/logout')
            .then(res => {
                if(res.data.success)
                    props.history.push("/login")
                else
                    alert('로그아웃에 실패했스니다.0')
                })
            }}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage