//import React from 'react';

//import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const AddToy = () => {
    const handleAddToy=event=>{
        event.preventDefault();
        const form=event.target;
        const toy_name=form.toy_name.value;
        const seller_name=form.seller_name.value;
        const email=form.email.value;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const category=form.category.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const description=form.description.value;
        form.reset();

        const addToy={toy_name,seller_name,email,price,quantity,category,rating,photo,description};
        console.log(addToy);

        fetch('http://localhost:5000/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div>
            <div className="container mx-auto p-8 bg-gradient-to-r from-sky-300 to-purple-300 mt-3">
            
                <h1 className="text-2xl font-bold mb-4 text-center pb-5">Toy Order Form</h1>
                
                <form onSubmit={handleAddToy} className="mx-80">
                    <div className="flex gap-8">
                        <div className="mb-4 w-1/2">
                            <label  className="block font-medium mb-1">Toy Name</label>
                            <input id="toy-name" type="text" name="toy_name" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter toy name" required />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block font-medium mb-1">Seller Name</label>
                            <input id="seller_name" name="seller_name" type="text" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter Seller Name" required />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="mb-4 w-1/2 ">
                            <label className="block font-medium mb-1">Seller Email</label>
                            <input id="email" name="email" type="email" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter email" required />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block font-medium mb-1">Price</label>
                            <input id="price" name="price" type="text" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter price" required />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-8">
                        <div className="mb-4 w-1/2 ">
                            <label className="block font-medium mb-1">Quantity</label>
                            <input id="quantity" name="quantity" type="number" className="w-full px-6 py-2 border border-black rounded" placeholder="Enter quantity" required />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label  className="block font-medium mb-1">Sub Category </label>
                            <select id="category" className="w-full px-4 py-2 -3 border-black rounded" name="category" required>
                                <option value="" disabled selected>Select a category</option>
                                <option value="Princesses">Princesses</option>
                                <option value="Animals">Animals</option>
                                <option value="Sidekicks">Sidekicks</option>
                            </select>
                        </div>
                        
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Rating</label>
                            <input id="rating" name="rating" type="text" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter price" required />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Photo URL</label>
                            <input id="photo" name="photo" type="text" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter Photo Url" required />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Description</label>
                            <textarea id="description" name="description" className="w-full p-2 border border-black rounded" placeholder="Enter description" required></textarea>
                        </div>
                        
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-12 py-2 text-xl font-medium rounded hover:bg-blue-600 mb-4">Submit</button>
                </form>
                </div>
            </div>

        
    );
};

export default AddToy;