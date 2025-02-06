import './banner.css'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/physics.png'
import nodeImg from '../assets/nodejs.png'
import exImg from '../assets/icons8-express-js-50.png'
import daisyImg from '../assets/daisy.png'
import mongoImg from '../assets/mongo.png'
import tailwindImg from '../assets/tailwind.png'
import vsImg from '../assets/vs.png'
import gitImg from '../assets/git.png'
import githubImg from '../assets/github.png'

const Skills = () => {
    return (
        <div className='my-10'>



            <section id="skills" className="py-10 px-5 lg:px-20 bg-gray-100 dark:bg-transparent text-gray-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
                        My Skills
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={htmlImg} alt="" />
                                <h3 className='text-center font-bold'>HTML</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={cssImg} alt="" />
                                <h3 className='text-center font-bold'>CSS</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={jsImg} alt="" />
                                <h3 className='text-center font-bold'>JavaScript</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={reactImg} alt="" />
                                <h3 className='text-center font-bold'>React.js</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={nodeImg} alt="" />
                                <h3 className='text-center font-bold'>Node.js</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={exImg} alt="" />
                                <h3 className='text-center font-bold'>Expess.js</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={daisyImg} alt="" />
                                <h3 className='text-center font-bold'>Daisy.ui</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={mongoImg} alt="" />
                                <h3 className='text-center font-bold'>MongoDB</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={tailwindImg} alt="" />
                                <h3 className='text-center font-bold'>Tainwind.css</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={vsImg} alt="" />
                                <h3 className='text-center font-bold'>Visual stdio Code</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={gitImg} alt="" />
                                <h3 className='text-center font-bold'>Git</h3>

                            </div>
                        </div>
                        <div className="card example-5 justify-center items-center flex-col">
                            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    rx="8"
                                    ry="8"
                                    className="line"
                                    height="100%"
                                    width="100%"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="inner">
                                <img className='w-16 h-16 m-4' src={githubImg} alt="" />
                                <h3 className='text-center font-bold'>Github</h3>

                            </div>
                        </div>

                        






                    </div>
                </div>
            </section>





        </div>
    );
};

export default Skills;