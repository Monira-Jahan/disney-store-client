//import React from 'react';

import { useContext, useState,  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    //const [error,setError]=useState('');
      const {createUser}=useContext(AuthContext);
      const [error,setError]=useState('');
    const handleRegister=event=>{
        event.preventDefault();
        setError('');
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name,email,password,photo);

         if (password.length < 6) {
            setError('Please add at least 6 characters..');
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please Add atleast one uppercase')
            return;
        }
        createUser(email,password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            updateData(result.user, name, photo)
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })

        const updateData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
    
            })
                .then(() => {
                    console.log('Name and Photo updated')
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-300 py-6 flex flex-col justify-center sm:py-12 my-8 rounded-xl shadow-xl">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold"> Please Register Now</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 w-full">
                  <form onSubmit={handleRegister}>
                                <div className="relative">
                                    <input  id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Enter Your Name" />
                                    <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Name</label>
                                </div>
                                <div className="relative">
                                    <input  id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Email address" />
                                    <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input  id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Password" />
                                    <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                </div>
                                <div className="relative">
                                    <input  id="photo" name="photo" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 mb-6" placeholder="Email address" />
                                    <label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Photo URL</label>
                                    
                            
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-3 py-1 my-3 mx-6">Register</button>
                                </div>
                                </form>
                                <p className="font-normal text-center">Already Have an Account? Please <Link  className="text-primary link-primary"to="/login">Login</Link>!!</p>

                                <p className="text-red-400">{error}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;