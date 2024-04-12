import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Detail = () => {
    const params = useParams();

    const navigate = useNavigate();

    return (
        <div>
            <h1>내 버킷 리스트</h1>
            <hr />
            <h3>상세 페이지입니다!</h3>
            <hr />
            <h5>나는 {params.bucket}을(를) 하고 싶어!</h5>
            <hr />
            <button onClick={() => {
                navigate('/');
            }}>back</button>
        </div>
    )
};

export default Detail;