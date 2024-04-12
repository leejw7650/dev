import React from 'react';
import {useNavigate } from 'react-router-dom';

const BucketBox = ({bucket}) => {
    const navigate = useNavigate();

    return (
        <div className='bucket'>
            <h3>{bucket.bucket}</h3>
            <button onClick={() => {
                navigate(`/detail/${bucket.bucket}`)
            }}>detail page</button>
        </div>
    )
};

export default BucketBox;