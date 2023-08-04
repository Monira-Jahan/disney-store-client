//import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-8 ">What Our Client Says!</h1>
            <div className="bg-gradient-to-r from-pink-400 to-purple-300 grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-0 py-12 px-4 md:px-12 rounded-xl" >
                <div className="card w-96 bg-blue-200 hover:bg-base-200  h-72 shadow-2xl border-8 border-gray-200 hover:translate-y-6">
                    <div className="avatar">
                        <div className="w-24 mx-32 mt-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/CVphJVP/client1.jpg" />
                        </div>
                    </div>
                    <div className="rating px-32 pt-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>

                    <div className="card-body">
                        <p className="text-sm font-medium pb-4">This stores selection is out of this world. Clearly they live and love what they do. I went for kites and was blown away by the selection.</p>

                    </div>
                </div>
                <div className="card w-96 bg-blue-200 hover:bg-base-200  h-72 shadow-2xl border-8 border-gray-200 hover:translate-y-6">
                    <div className="avatar">
                        <div className="w-24 mx-32 mt-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/CVphJVP/client1.jpg" />
                        </div>
                    </div>
                    <div className="rating px-32 pt-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>

                    <div className="card-body">
                       
                        <p className="text-sm font-medium">They have very nice and exclusive products, some products are great quality for a great price. </p>

                    </div>
                </div>
                <div className="card w-96 bg-blue-200 hover:bg-base-200  h-72 shadow-2xl border-8 border-gray-200 hover:translate-y-6">
                    <div className="avatar">
                        <div className="w-24 mx-32 mt-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/CVphJVP/client1.jpg" />
                        </div>
                    </div>
                    <div className="rating px-32 pt-4">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    </div>

                    <div className="card-body">
                        <p className="text-sm font-medium">I got my order quite fast and it was very well packed in a highly decorated Disney illustrated box.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;