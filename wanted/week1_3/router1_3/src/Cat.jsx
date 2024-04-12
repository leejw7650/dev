import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// const navigate = useNavigate();

const Cat = (props) => {
    const {cat_name} = useParams();

    const navigate = useNavigate();


    return (
        <div>
            <div>Cat</div>
            <button onClick={() => {
                navigate('/Dog')
            }}>To Dog</button>
            <div>
                <Link to="/..">Back</Link>
            </div>
        </div>
        )
    }

export default Cat;