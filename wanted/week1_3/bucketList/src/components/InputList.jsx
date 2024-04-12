import React, { useState, useRef} from 'react';


const InputList = ({bucketList, setBucketList}) => {
    const [bucket, setBucket] =  useState('');

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