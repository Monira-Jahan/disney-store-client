//import React from 'react';
import {FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <img className="md:px-48 md:py-8 w-3/4 h-96" src="https://i.ibb.co/ZTk20rh/Png-Item-2550411.png" alt=""/>

            <div className="md:mx-72">
            
                <button className="btn btn-primary"><FaAngleLeft/>     <Link to="/"> Back to homepage</Link></button>
            </div>
        </div>
    );
};

export default Error;