import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import { addDetail, deleteDetail } from '../redux/slices/detail';

const DetailPage = () => {
    const params = useParams();
    const details = useSelector((state) => state.detail.detail_arr[`${params.idx}`]);
    const [newDetail, setNewDetail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div className="bucket-list">

            <h1>내 버킷리스트</h1>

            <hr style={{width:'95%'}}/>

            <p style={{textAlign:'center', fontSize:'20px'}}>나는 {details.detail}을(를) 하고 싶어!</p>

            <input 
            value={newDetail}
            placeholder= "Edit as..." 
            type='text' 
            onChange={(event) => setNewDetail(event.target.value)} />

            <button className="button-edit" onClick={() => {
                if (newDetail !== '') {
                    dispatch(addDetail({idx: `${params.idx}`, detail: newDetail}));
                    setNewDetail('');
                }
            }}>Edit</button>

            <button className="button-delete" onClick={() => {
                dispatch(deleteDetail({idx: `${params.idx}`}));
                navigate(-1);
            }}>Delete</button>

            <button className="button-back" onClick={() => {
                navigate(-1);
            }}>Back</button>

        </div>
    )
};

export default DetailPage;