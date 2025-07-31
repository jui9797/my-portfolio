import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import profileImg from '../assets/portfolio-img.png'
// import { motion } from "framer-motion";
import "./Banner.css";

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
            <h1 className="p-4 text-3xl lg:text-6xl font-bold bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-move">
              Hey! This is Juiena Parvin
            </h1>

            <p className="py-8 dark:text-dark-secondary">
              A dedicated, creative, and detail-oriented Web Developer who
              enjoys crafting impactful, responsive websites that truly stand
              out from the rest.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4 lg:gap-6 mb-8 md:mb-0">
                <a
                  href="https://www.linkedin.com/in/juiena-parvin-529105310/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl  lg:text-5xl text-blue-600 hover:text-blue-800 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/jui9797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl  lg:text-5xl text-gray-800 hover:text-black dark:text-dark-secondary transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100055737878584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl  lg:text-5xl text-blue-500 hover:text-blue-700 transition"
                >
                  <FaFacebookSquare />
                </a>
              </div>

              <div className="">
                <a
                  href="https://drive.google.com/file/d/1oVcq5cM1KjVo70EUve_3TquNVGmUGZah/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fancy-button "
                >
                  <span className="fancy-gradient"></span>
                  <span className=" text-white ">View Resume</span>{" "}
                </a>
              </div>
            </div>
          </div>
          {/* img */}
          {/* <div className="">
                        <motion.img
                            src={profileImg}
                            alt="profile"
                            className=" rounded-full hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500"
                            animate={{
                                y: [0, -10, 0, 10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />



                        
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
