
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../hooks/ThemeToggle';

const Navbar = () => {
    
    const links =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
   
    
    </>
    return (
        <div className='border-b-2 shadow-lg'>
            <div className="navbar">
                <div className="navbar-start lg:pl-16">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-500"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-blue-600">
                            {links}
                        </ul>
                    </div>
                   
                    <p className='custom text-2xl font-bold text-blue-600'>JUIENA</p>
                    {/* theme button */}
                    <ThemeToggle></ThemeToggle>
                </div>
                <div className="navbar-end hidden lg:flex lg:pr-16">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-blue-600">
                        {links}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;