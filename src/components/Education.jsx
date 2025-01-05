import React from 'react';

const Education = () => {
    return (
        <div>
            <section id="education" className="py-10 px-5 lg:px-20 bg-gray-100 text-gray-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
                        Educational Qualifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5">
                        {/* HSC */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-blue-500">Higher Secondary Certificate (HSC)</h3>
                            <p className="mt-2 font-medium text-gray-600">
                                Board: <span className="text-blue-600">Rajshahi Education Board</span>
                            </p>
                            <p className="mt-2 font-medium text-gray-600">
                                Institution: <span className="text-blue-600">Naogaon Gov’t College</span>
                            </p>
                            <p className="mt-2 font-medium text-gray-600">
                                Year: <span className="text-blue-600">2018</span>
                            </p>
                            <p className="mt-2 font-medium text-gray-600">
                                Result: <span className="text-blue-600">Grade A</span>
                            </p>
                        </div>


                        {/* Bachelor's Degree */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-blue-500">Bachelor of Science in Physics</h3>
                            <p className="mt-2 font-medium text-gray-600">Institution: <span className="text-blue-600">Naogaon Gov’t College</span></p>
                            <p className="mt-2 font-medium text-gray-600">Year: <span className="text-blue-600">2019 - 2024</span></p>
                            <p className="mt-2 font-medium text-gray-600">Result: <span className="text-blue-600">CGPA: 3.80/4.00</span></p>
                        </div>

                        {/* Master's Degree */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-blue-500">Learning web developing </h3>
                            <p className="mt-2 font-medium text-gray-600">Institution: <span className="text-blue-600">Programming Hero</span></p>
                            <p className="mt-2 font-medium text-gray-600">Year: <span className="text-blue-600">Present</span></p>
                            <p className="mt-2 font-medium text-gray-600">Result: <span className="text-blue-600">Ongoing</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;