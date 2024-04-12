import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            Home
            <br />
            <Link to="/Cat">Cat</Link>
            <br />
            <Link to="/Dog">Dog</Link>
            <br />
        </div>
        )
    }

export default Home;