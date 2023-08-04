import { Link } from "react-router-dom";
import { FaAddressCard, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img className="w-18 h-16 pl-8" src="https://i.ibb.co/XbqXCWF/pngegg.png" alt="" />
                <p className="text-center font-medium">Disney Store<br />Providing disney toys since 2020</p>

            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover font-medium">Home</Link>
                <Link className="link link-hover font-medium">All Toys</Link>
                <Link className="link link-hover font-medium">About Us</Link>
                <Link className="link link-hover font-medium">Blogs</Link>
            </div>
            <div>
                <span className="footer-title">Contacts</span>
                <div className="flex gap-2">
                    <FaAddressCard className="mt-1" />
                    <Link className="link link-hover font-medium text-sm"> New York,NY 10012,US</Link>
                </div>
                <div className="flex gap-2">
                    <FaEnvelope className="mt-1" />
                    <Link className="pb-1 link link-hover font-medium ">Info12@gmail.com</Link>
                </div>
                <div className="flex gap-2">
                    <FaPhone className="mt-1" />
                    <Link className="link link-hover font-medium">+0122 456 5667</Link>
                </div>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text font-medium">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>

        </footer>


    );
};

export default Footer;