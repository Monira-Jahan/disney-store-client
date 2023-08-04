import { useState } from "react";
import ToyTable from "./ToyTable";
import { useLoaderData } from "react-router-dom";


const AllToys = () => {
const disneyToys=useLoaderData();
const[toys,setToys]=useState(disneyToys);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-4">All Toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
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

export default AllToys;