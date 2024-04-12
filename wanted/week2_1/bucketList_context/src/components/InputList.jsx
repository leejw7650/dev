import React, { useState, useRef} from 'react';
import { useContext } from 'react';
import { BucketContext } from '../context/BucketContext';

const InputList = () => {
    const [bucket, setBucket] =  useState('');

    const {setBucketList} = useContext(BucketContext);
    const addBucket = () => {
        setBucketList(prev => [...prev, {bucket:bucket}]);
        setBucket('');
    }

    return (
        <div>
            <input value={bucket} type='text' placeholder='하고 싶은 일을 작성하세요.'
            onChange={(event) => {
                setBucket(event.target.value)
            }} />
            <button onClick={() => addBucket()}>추가</button>
        </div>
    )
};

export default InputList;