//import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    const navBars = <>
        <li><Link to="/" className="text-black font-bold">Home</Link></li>
        <li><Link to="/allToys" className="text-black font-medium">All Toys</Link></li>
        
        {
            user ?.email ? <>
                <div>
                    <li><Link to="/myToys" className="text-black font-medium">My Toys</Link></li>
                </div>
                <div>
                    <li><Link to="/addToy"className="text-black font-medium">Add A Toy</Link></li>
                </div>
                <div>
                    <img className='avatar w-12 h-12 border border-white rounded-full hover:{user.displayName}' src={user.photoURL} alt="" />
                </div>
                <div className="mx-4">
                    <button onClick={handleLogout} className="btn btn-xs  rounded px-4 py-5 bg-blue-300 border-none font-semibold text-black hover:text-white">Log Out</button>
                </div>
            </>:<li><Link to="/login" className="text-black font-medium">Login</Link></li>
        }
        
    </>
    return (
        <div className="navbar bg-gradient-to-r from-purple-300 to-gray-200 rounded-xl mt-5">

            <div className="navbar-start text-white">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBars}
                    </ul>
                </div>
                <img className="w-18 h-16 pl-8" src="https://i.ibb.co/XbqXCWF/pngegg.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBars}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;