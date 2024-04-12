import React from "react";
import Detail from './Detail';
import { useSelector } from 'react-redux';


const Main = () => {
    const details = useSelector(state => state.detail.detail_arr);

    return (
        <div className="bucket-list">

            <h1>내 버킷리스트</h1>
            
            <hr style={{width:'95%'}}/>

            {Object.keys(details).map((key) => {
                return (
                    <Detail key={key} idx={key} detail={details[key].detail} isComplete={details[key].isComplete} />
                );
            })}
            
        </div>
    )
};

export default Main;