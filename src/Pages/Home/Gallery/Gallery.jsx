const Gallery = () => {
    return (
        <div className="mx-auto">
            <h1 className="text-4xl font-bold text-center py-8 ">Our Gallery</h1>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                <img className="bg-purple-700  transition duration-300  ease-in-out hover:opacity-60 card w-96 border-8 border-pink-400 shadow-2xl" src="https://i.ibb.co/G3YPphz/img1.jpg" alt="" />
                <img className="bg-blue-400 bg-fixed  transition duration-300 ease-in-out hover:opacity-60 card w-96 border-8 shadow-2xl border-pink-400 h-96" src="https://i.ibb.co/G73wJfL/img2.jpg" alt="" />
                <img className="bg-fixed  transition duration-300 ease-in-out hover:opacity-60 card w-96 border-8 shadow-2xl border-pink-400" src="https://i.ibb.co/c82tWNf/img6.jpg" alt="" />
                <img className="bg-fixed  transition duration-300 ease-in-out hover:opacity-60 card w-96 border-8 shadow-2xl border-pink-400 h-96" src="https://i.ibb.co/VSDxp5h/img8.jpg" alt="" />
                <img className="bg-fixed  transition duration-300 ease-in-out hover:opacity-60 card w-96 border-8 shadow-2xl border-pink-400" src="https://i.ibb.co/QftXtMH/donald-duck.jpg" alt="" />
                <img className="bg-fixed  transition duration-300 ease-in-out hover:opacity-60 card w-96 border-8 shadow-2xl border-pink-400 h-96" src="https://i.ibb.co/7KbdLQb/img5.jpg" alt="" />
            </div>
            <div className="md:mx-96 my-8">
            <button className="btn bg-purple-500 mx-36 border-none">See More</button>
            </div>
        </div>
    );
};

export default Gallery;