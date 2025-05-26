import { useRef } from 'react';
import {  FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';




const Contact = () => {
    
    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();
        const form2 = e.target
    
        emailjs
          .sendForm('service_6seqxf5', 'template_117ppvc', form.current, {
            publicKey: 'lsuXb9u_-Psqs3XFf',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              Swal.fire({
                title: "Thanks for messaging me.",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              form2.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contact" className="py-10  text-gray-800 dark:text-gray-300">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">Contact Information</h2>

                <div className='flex flex-col lg:flex-row gap-10'>
                    {/* Contact Form */}
                <div className="flex justify-center w-full lg:w-2/3 ">
                    <form ref={form} onSubmit={sendEmail} className=" p-8 rounded-lg shadow-lg  w-full space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Send me a Message</h3>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name='from_name'
                               
                                required
                                className="mt-2 block w-full px-4 py-2 border  focus:ring-2 focus:ring-blue-500 bg-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name='from_email'
                               
                                required
                                className="mt-2 block w-full px-4 py-2 border bg-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                required
                                rows="4"
                                className="mt-2 block w-full px-4 py-2 border bg-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>

                        
                    </form>
                </div>

                {/* Contact Info */}
                <div className=" space-y-2 justify-center gap-8 text-lg w-full lg:w-1/3">
               <div> <h2 className='text-xl mb-2 font-bold text-gray-600 flex gap-2 items-center dark:text-gray-300'> Address <FaHome /></h2>
               <p className='text-gray-600 text-xs mb-2 dark:text-gray-300'>Naogaon, Bangladesh.</p>
               </div>
                    <div className=" border-2 p-2 pl-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <h4 className="font-semibold text-blue-500 flex gap-2 items-center ">Email <MdEmail /></h4>
                        <p className="mt-2 text-gray-600 text-xs dark:text-gray-300">jannatjui414@gmail.com</p>
                    </div>

                    <div className=" border-2 p-2 pl-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <h4 className="font-semibold text-blue-500 flex gap-2 items-center ">Phone <FaPhoneAlt /></h4>
                        <p className="mt-2 text-gray-600 text-xs dark:text-gray-300">+8801705910832</p>
                    </div>

                    <div className=" border-2 p-2 pl-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <h4 className="font-semibold text-blue-500 flex gap-2 items-center ">WhatsApp <FaWhatsapp /></h4>
                        <p className="mt-2 text-gray-600 text-xs dark:text-gray-300">+8801705910832</p>
                    </div>
                    <h2 className='dark:text-gray-300 text-gray-600 font-bold pt-12'>Follow Me</h2>
                    <div className='flex flex-row justify-between '>
                            <div className='flex gap-4 lg:gap-6 items-center'>
                                <a
                                    href="https://www.linkedin.com/in/juiena-parvin-529105310/"
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
                                    className="text-xl lg:text-3xl text-gray-800 hover:text-black transition dark:text-gray-300"
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

                            
                        </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
