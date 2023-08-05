import { Slide } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div className="carousel w-full h-[200px] md:h-[500px] rounded-xl mt-10 md:hover:-translate-y-6 ">
            <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-purple-300 to-slate-300  ">
           
                <div className="absolute flex items-center left-0 top-0  bg-gradient-to-r from-pink-400 to-purple-300 h-full">
                   
                    <div className='text-white space-y-7 w-1/2 md:px-24 md:border-teal-400 md:shadow-2xl md:rounded-xl py-4 md:py-12'>
                        <Slide>
                        <h2 className='md:text-2xl text-black font-bold '>Best Disney Toy Store For Kids</h2>
                        <p className="text-black">The Disney Store is a chain of specialty stores selling only Disney related items, many of them exclusive, under its own name and Disney Outlet.</p>
                        <div>
                            <button className="btn bg-purple-600 border-none mr-5">Shop Now</button>
                            
                        </div>
                        </Slide>
                    </div>
                    <img src="https://i.ibb.co/qxBTrHB/7-2-disney-princesses-free-download-png.png" className="w-2/5 h-96" />
                    
                </div>
              
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  bg-purple-600 border-none ">❮</a>
                    <a href="#slide2" className="btn btn-circle  bg-purple-600 border-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-gradient-to-r from-purple-300 to-slate-300">

                <div className="absolute flex items-center left-0 top-0  bg-gradient-to-r from-pink-400 to-purple-300 h-full">
                    <div className='text-black space-y-7 w-1/2 px-20 border-teal-400 shadow-2xl rounded-xl py-12'>
                        <Slide>
                        <h2 className='text-2xl  font-bold '>Best Disney Toy Store For Kids</h2>
                        <p>The Disney Store is a chain of specialty stores selling only Disney related items, many of them exclusive, under its own name and Disney Outlet. It was a business unit of Disney Consumer Products with the Disney Parks, Experiences and Products segment of The Walt Disney Company conglomerate.</p>
                        <div>
                            <button className="btn bg-purple-600 border-none mr-5">Shop Now</button>
                           
                        </div>
                        </Slide>
                    </div>
                 
                    <img src="https://i.ibb.co/McdHCzn/751589-mickey-mouse.jpg" className=" border-white border-8 w-1/4 rounded-lg shadow-2xl ml-8"/>
                    <img src="https://i.ibb.co/5Mn9KSG/Easy-Disney-Drawing-Ideas-And-Tutorials.jpg" className="w-1/4 rounded-lg shadow-2xl absolute right-10 top-1/2 border-white border-8" />
                   
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  bg-purple-600 border-none mb-14 ">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-purple-600 border-none mb-14">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-gradient-to-r from-purple-300 to-slate-300 ">

                <div className="absolute flex items-center left-0 top-0  bg-gradient-to-r from-pink-400 to-purple-300 h-full">
                    <div className='text-black space-y-7 w-1/2 px-20 border-teal-400 shadow-2xl rounded-xl py-12'>
                    <Slide>
                        <h2 className='text-2xl font-bold '>Best Disney Toy Store For Kids</h2>
                        <p>The Disney Store is a chain of specialty stores selling only Disney related items, many of them exclusive, under its own name and Disney Outlet. It was a business unit of Disney Consumer Products with the Disney Parks, Experiences and Products segment of The Walt Disney Company conglomerate.</p>
                        <div>
                            <button className="btn bg-purple-600 border-none mr-5">Shop Now</button>
                           
                        </div>
                        </Slide>
                    </div>

                    <img src="https://www.seekpng.com/png/detail/412-4129751_toyst-toy-story-complete-characters-png.png" className="w-2/5 h-96 border-8 rounded-xl ml-8" />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle  bg-purple-600 border-none mb-14 ">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-purple-600 border-none mb-14">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;