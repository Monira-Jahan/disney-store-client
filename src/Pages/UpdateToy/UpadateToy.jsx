import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpadateToy = () => {

    const toy =useLoaderData();
    const { _id,toy_name, seller_name, email, price, quantity, category, rating, photo, description } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
       const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        form.reset();

        const updateToy = { price, quantity,description };
        console.log(updateToy);

        fetch(`http://localhost:5000/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Cooffee updated Successfully!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  }) 
            }
        })
    }
    return (
        <div>
            <div className="container mx-auto p-8 bg-gradient-to-r from-sky-300 to-purple-300 mt-3">

                <h1 className="text-2xl font-bold mb-4 text-center pb-5">Update toy of {toy_name}</h1>

                <form onSubmit={handleUpdateToy} className="mx-80">
                   
                    <div className="flex gap-8">
                        
                        <div className="mb-4 w-1/2">
                            <label className="block font-medium mb-1">Price</label>
                            <input id="price" name="price" type="text" className="w-full px-8 py-2 border border-black rounded" placeholder="Enter price" required />
                        </div>
                        <div className="mb-4 w-1/2 ">
                                <label className="block font-medium mb-1">Quantity</label>
                                <input id="quantity" name="quantity" type="number" className="w-full px-6 py-2 border border-black rounded" placeholder="Enter quantity" required />
                            </div>
                    </div>
                    <div>

                        <div className="mb-4">
                            <label className="block font-medium mb-1">Description</label>
                            <textarea id="description" name="description" className="w-full p-2 border border-black rounded" placeholder="Enter description"></textarea>
                        </div>

                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-12 py-2 text-xl font-medium rounded hover:bg-blue-600 mb-4">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpadateToy;