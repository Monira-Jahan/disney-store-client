//import React from 'react';

import { Link } from "react-router-dom";

const ToyTable = ({toy}) => {
    const {_id,toy_name,seller_name,price,quantity,category,photo,}=toy;
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
            </td>
            <td className="">
                           {toy_name}
                    
                        </td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td><label htmlFor="my-modal" className="btn btn-outline btn-primary"><Link to={`/toyDetails/${_id}`}>View Details</Link></label>
</td>
                        
    </tr>
    );
};

export default ToyTable;