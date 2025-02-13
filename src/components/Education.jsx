import studyimg from '../assets/mortarboard.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Education = () => {
useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: "ease-in-out", 
          once: true, 
        });
      }, []);

    return (
        <div>
            <section id="education" className="py-10 lg:py-20 px-5 lg:px-20  text-gray-800">
                <div className="container mx-auto">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
                        Educational Qualifications
                    </h2>
                    {/* timeline start */}
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <img src={studyimg} alt="" className='h-10 w-10' />
                            </div>
                            <div data-aos="zoom-in" className="timeline-start mb-10 md:text-end shadow-xl p-2">
                                <time className="font-mono text-gray-600 italic dark:text-gray-200">2025</time>
                                <div className="text-lg font-black"><h3  className="text-xl lg:text-2xl font-bold text-gray-500 dark:text-white">Bachelor of Science in Physics(BSC)</h3></div>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">Institution: <span className="text-blue-600">Naogaon Gov’t College</span></p>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">Year: <span className="text-blue-600">2019 - 2024</span></p>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">Result: <span className="text-blue-600">CGPA: 3.80/4.00</span></p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                            <img src={studyimg} alt="" className='h-10 w-10' />
                            </div>
                            <div data-aos="zoom-in" className="timeline-end md:mb-10 shadow-xl p-2">
                                <time className="font-mono text-gray-600 italic dark:text-gray-200">2018</time>
                                <div className="text-lg font-black"><h3 className="text-xl lg:text-2xl font-bold text-gray-500 dark:text-white">Higher Secondary Certificate (HSC)</h3></div>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">Institution: <span className="text-blue-600">Naogaon Gov’t College</span></p>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">
                                Board: <span className="text-blue-600">Rajshahi Education Board</span>
                            </p>
                            <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">
                                Result: <span className="text-blue-600">Grade A</span>
                            </p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                            <img src={studyimg} alt="" className='h-10 w-10' />
                            </div>
                            <div data-aos="zoom-in" className="timeline-start mb-10 md:text-end shadow-xl p-2">
                                <time className="font-mono text-gray-600 italic dark:text-gray-200">2016</time>
                                <div className="text-lg font-black"><h3 className="text-xl lg:text-2xl font-bold text-gray-500 dark:text-white"> Secondary School Certificate (SSC)</h3></div>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">Institution: <span className="text-blue-600">Naogaon Gov’t Girls High School</span></p>
                                <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">
                                Board: <span className="text-blue-600">Rajshahi Education Board</span>
                            </p>
                            <p className="mt-2 font-medium text-gray-600 dark:text-gray-200">
                                Result: <span className="text-blue-600">Grade A+</span>
                            </p>
                            </div>
                            <hr />
                        </li>
                       
                        
                    </ul>

                    {/* timeline end */}
                </div>
            </section>
        </div>
    );
};

export default Education;