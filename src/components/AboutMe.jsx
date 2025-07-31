import { useEffect } from "react";
import Lottie from "lottie-react";
import aboutMe from "../assets/lottie/Animation - 1738480476468.json";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <section id="about" className="py-6 px-5 lg:px-20  text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <div className=" w-full h-48 lg:w-80 lg:h-80 ">
              <Lottie
                animationData={aboutMe}
                className="w-full h-full"
              ></Lottie>
            </div>

            <div className="w-full lg:w-2/3 text-lg leading-relaxed text-gray-600">
              <p className="dark:text-gray-300">
                Hi! I’m{" "}
                <span className="font-semibold text-blue-600">Jannat</span>. I
                am a Energetic{" "}
                <span className="font-semibold text-blue-600">
                  Junior Web Developer
                </span>
                , always striving to learn and grow. My journey in programming
                began when I discovered my love for making websites and creating
                innovative solutions. Over the years , I have honed my skills in
                <span className="font-semibold text-blue-600">
                  {" "}
                  JavaScript, React, Node.js, MongoDB{" "}
                </span>
                etc.
              </p>
              <p className="mt-4 dark:text-gray-300">
                Beyond programming, I enjoy{" "}
                <span className="font-semibold text-blue-600">
                  Travelling, Painting, Reading Books
                </span>
                . These activities help me relax and refresh my mind, making me
                more productive and creative in my work.
              </p>
              <p className="mt-4 dark:text-gray-300">
                I love working on{" "}
                <span className="font-semibold text-blue-600">
                  {" "}
                  web applications{" "}
                </span>
                and collaborating with talented individuals to bring ideas to
                life. If you’d like to connect, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
