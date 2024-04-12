import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addDetail, deleteDetail, completeDetail} from '../redux/slices/detail';
import { Link } from "react-router-dom";

const Detail = ({idx, detail, isComplete}) => {
    const [newDetail, setNewDetail] = useState('');
    const dispatch = useDispatch();
    return (
        <div className={`detail-${isComplete}`}>

            <Link to={`/detail/${idx}`}>{detail}</Link>

            <input 
            className="input-text" 
            value={newDetail} 
            placeholder="Edit as..." 
            type='text' 
            onChange={(event) => setNewDetail(event.target.value)} />

            <button className="button-edit" onClick={() => {
                if (newDetail !== '') {
                    dispatch(addDetail({idx: `${idx}`, detail: newDetail, isComplete: false}));
                    setNewDetail('');
                }
            }}>Edit</button>

            <button className="button-delete" onClick={() => {
                dispatch(deleteDetail({idx: `${idx}`}));
            }}>Delete</button>

            <button onClick={() => {
                dispatch(completeDetail({idx: `${idx}`}))
            }}>Complete</button>
        </div>
    )
}

export default Detail;