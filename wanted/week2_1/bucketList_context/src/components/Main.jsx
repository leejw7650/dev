import React, { useContext } from 'react';

import InputList from './InputList';
import BucketBox from './BucketBox';

import { BucketContext } from '../context/BucketContext';

const Main = () => {
    const {bucketList} = useContext(BucketContext);
    return (
        <div>
            <h1>내 버킷 리스트</h1>
            <hr />
            <InputList />
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