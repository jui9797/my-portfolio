import React from 'react';

const Skills = () => {
    return (
        <div className='my-10'>



            <section id="skills" className="py-10 px-5 lg:px-20 bg-gray-100 dark:bg-transparent text-gray-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
                        My Skills
                    </h2>
                    <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
                        {/* Frontend Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-500">Frontend</h3>
                            <div className="space-y-4 mt-4">
                                <div className="group">
                                    <p className="font-medium text-gray-600">HTML</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-[#f88075] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4"
                                            style={{ width: '90%' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="group">
                                    <p className="font-medium text-gray-600">CSS</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f88075] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">JavaScript</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f88075] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">React</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f88075] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Backend Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-500">Backend</h3>
                            <div className="space-y-4 mt-4">
                                <div className="group">
                                    <p className="font-medium text-gray-600">Node.js</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#716b8f] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">Express.js</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#716b8f] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">MongoDB</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#716b8f] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tools */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-500">Tools</h3>
                            <div className="space-y-4 mt-4">
                                <div className="group">
                                    <p className="font-medium text-gray-600">Git</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f8c059] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">Docker</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f8c059] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">VS Code</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#f8c059] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add another category if needed */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-500">Frameworks & CSS Libraries</h3>
                            <div className="space-y-4 mt-4">
                                <div className="group">
                                    <p className="font-medium text-gray-600">Tailwind.css</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#20b2aa] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">Daisy.ui</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#20b2aa] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <p className="font-medium text-gray-600">Mamba.ui</p>
                                    <div className="bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#20b2aa] h-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-4" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default Skills;