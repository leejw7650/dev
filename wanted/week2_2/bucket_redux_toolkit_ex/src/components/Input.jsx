import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addDetail } from '../redux/slices/detail';

const Input = () => {
    const [detail, setDetail] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="input-new-detail">

            <input 
            className="input-text" 
            value={detail} 
            placeholder="Add my new list..." 
            type='text' 
            onChange={(event) => setDetail(event.target.value)} />

            <button className="button-add" onClick={() => {
                if (detail !== '') {
                    dispatch(addDetail({idx: Date.now(), detail: detail})); // 사용자 수가 많을 경우 중복될 수 있음.
                    setDetail('');
                }
            }}>Add</button>
            
        </div>
    )
}

export default Input;