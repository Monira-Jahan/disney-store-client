//import React from 'react';
//import { useLoaderData } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToyTable from './ToyTable';


const MyToys = () => {
  const {user}=useContext(AuthContext);
  const [toys,setToys]=useState([]);
  const url="http://localhost:5000/toys";

   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setToys(data))
   },[url])

    return (
        
      <div>
            <h2 className="text-4xl font-bold text-center py-4">My Toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="hover bg-sky-300">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        
                        <th>Seller Info</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        
                        <th>Description</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                toys.map(toy=><ToyTable
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}></ToyTable>)
                              }
                        
                    </tbody>

                </table>
            </div>
        </div> 
    );
};

export default MyToys;