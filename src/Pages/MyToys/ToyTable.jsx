//import React from 'react';
import {FaEdit,FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ToyTable = ({toy}) => {
   
    
   const {_id,toy_name,seller_name,email,price,quantity,category,rating,photo,description}=toy;
    return (
        <tr>
             
        <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
            {seller_name}
                <div className="text-sm opacity-50">{email}</div>
            </td>
            <td className="">
                           {toy_name}
                    
                        </td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{rating}</td>
                        <td>{description}</td>
                        <div className="mt-14 flex">
                        <Link to={`/updateToy/${_id}`}><td><FaEdit className="ml-6"/> </td></Link>
                       <Link> <td><FaTrashAlt className="mr-6"/></td> </Link>
                        </div>
                        
    </tr>
    );
};

export default ToyTable;