import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from '../assets/portfolio-img.png'
import { motion } from "framer-motion";
import  './Banner.css'


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
            <div data-aos="zoom-in" className="hero sm:h-full  lg:h-[500px] mb-10">
                <div className="hero-content text-center flex flex-col lg:flex-row lg:gap-28">
                    <div className="max-w-lg ">
                        <h1 className="p-4 text-3xl lg:text-5xl font-bold text-light-text dark:text-dark-text">
                            Welcome! I’m Juiena.P.
                        </h1>
                        <p className="py-6 dark:text-dark-secondary">
                            A Passionate Web Developer Who Loves Building Websites That Make a Difference.
                        </p>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex gap-4 lg:gap-6">
                                <a
                                    href="https://www.linkedin.com/in/jannat-chowdhury-529105310"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl lg:text-4xl text-blue-600 hover:text-blue-800 dark:text-dark-secondary transition"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/jui9797"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl lg:text-4xl text-gray-800 hover:text-black dark:text-dark-secondary transition"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100055737878584"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl md:text-3xl lg:text-4xl text-blue-500 hover:text-blue-700 dark:text-dark-secondary transition"
                                >
                                    <FaFacebookSquare />
                                </a>
                            </div>

                            <div className="flex justify-center">
                                <a
                                    href="https://drive.google.com/file/d/1lk9cYtheGhq0rKkflpyBcS26bGcBuge1/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-blue-500 text-white dark:bg-transparent dark:border-2 dark:text-gray-300 rounded-md font-semibold  transition-all shadow-md"
                                >
                                    <FaDownload /> Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className=" w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                        <motion.img
                            src={profileImg}
                            alt="profile"
                            className="w-full h-full rounded-full hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500"
                            animate={{
                                y: [0, -10, 0, 10, 0], // Up & Down motion
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />



                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
