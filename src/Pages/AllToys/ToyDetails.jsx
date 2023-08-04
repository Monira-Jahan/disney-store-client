//import React from 'react';

import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toydetails = useLoaderData();
    const {  toy_name, seller_name, price, quantity, category, photo,rating,description } = toydetails;
    return (
        <div className="card card-side h-96 bg-gradient-to-r from-blue-400 to-sky-100 shadow-xl my-8">
            <figure><img className="w-full h-72 ml-48 rounded-xl" src={photo} alt=" " /></figure>
            <div className="card-body mr-12 mt-12">
                
              <div className="card-actions justify-end pr-24">
                <ul>
                    <li><h2 className="card-title">Toy Name:{toy_name}</h2></li>
                <li><p><strong>Seller Name: </strong>{seller_name}</p></li>
                <li><p><strong>Sub Category: </strong>{category}</p></li>
                <li><p><strong>Price: </strong>{price}</p></li>
               <li> <p><strong>Rating: </strong>{rating}</p></li>
               <li><p><strong>Available Quantity: </strong>{quantity}</p></li>
                <li><p><strong>Description: </strong>{description}</p></li>
                </ul>    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;