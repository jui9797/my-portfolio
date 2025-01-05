import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
    
    </>
    return (
        <div className='my-10'>
            <div className="navbar fixed bg-blue-300 top-0 left-0 right-0 z-40 ">
                <div className="navbar-start lg:pl-16">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600">
                            {links}
                        </ul>
                    </div>
                    <p className='custom text-2xl font-bold text-gray-600'>Jannat</p>
                </div>
                <div className="navbar-end hidden lg:flex lg:pr-16">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-gray-600">
                        {links}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;