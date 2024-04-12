import React, {useState} from 'react';

import InputList from './InputList';
import BucketBox from './BucketBox';

const Main = () => {
    const [bucketList, setBucketList] = useState([]);

    return (
        <div>
            <h1>내 버킷 리스트</h1>
            <hr />
            <InputList bucketList={bucketList} setBucketList={setBucketList}/>
            <hr />
            {bucketList.map((bucket) => {
                return (
                    <BucketBox bucket={bucket}/>
                )
                })}
        </div>
    )
};

export default Main;