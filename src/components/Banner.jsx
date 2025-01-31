import React, { useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";



const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true, 
        });
      }, []);
    return (
        <div>
            <div data-aos="zoom-in" className="hero sm:h-full md:h-[400px] lg:h-[500px]  mb-10 bg-gradient-to-b from-indigo-400 ...">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className=" p-4 text-3xl lg:text-5xl font-bold text-white">Welcome!  I’m Jannat.  </h1>
                        <p className="py-6 text-white">
                            A Passionate Web Developer Who Loves Building Websites That Make a Difference.
                        </p>
                        <div className='flex flex-row justify-between '>
                            <div className='flex gap-4 lg:gap-6 items-center'>
                                <a
                                    href="https://www.linkedin.com/in/jannat-chowdhury-529105310"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl lg:text-3xl text-blue-600 hover:text-blue-800 transition"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/jui9797"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl lg:text-3xl text-gray-800 hover:text-black transition"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100055737878584"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl lg:text-3xl text-blue-500 hover:text-blue-700 transition"
                                >
                                    <FaFacebookSquare />
                                </a>
                            </div>

                            <div className=''>
                                <button className=" px-1 py-2 lg:px-6 lg:py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-md"><a 
                                className='flex items-center gap-2' href="https://drive.google.com/file/d/16obTozJH5imugvk9XRAdjgYc2P_UDYts/view?usp=sharing" target='blank' ><FaDownload /> Download Resume</a></button>
                                


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;