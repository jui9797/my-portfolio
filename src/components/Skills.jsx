import { useState } from "react";
import "./banner.css";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/physics.png";
import nodeImg from "../assets/nodejs.png";
import exImg from "../assets/icons8-express-js-50.png";
import daisyImg from "../assets/daisy.png";
import mongoImg from "../assets/leaf.png";
import tailwindImg from "../assets/tailwind.png";
import vsImg from "../assets/vs.png";
import gitImg from "../assets/git.png";
import githubImg from "../assets/github.png";
import nextImg from "../assets/next.png";
import jwtImg from "../assets/jwt.png";
import npmImg from "../assets/npm.png";
import postman from "../assets/postman.png";
import viteImg from "../assets/vite.png";
import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import canva from "../assets/canva.png";

const allSkills = [
  { name: "HTML", img: htmlImg, category: "Frontend" },
  { name: "CSS", img: cssImg, category: "Frontend" },
  { name: "JavaScript", img: jsImg, category: "Frontend" },
  { name: "React.js", img: reactImg, category: "Frontend" },
  { name: "Tailwind.css", img: tailwindImg, category: "Frontend" },
  { name: "Daisy.ui", img: daisyImg, category: "Frontend" },
  { name: "Next.js", img: nextImg, category: "Frontend" },
  { name: "Framer Motion", img: framer, category: "Frontend" },

  { name: "Node.js", img: nodeImg, category: "Backend" },
  { name: "Express.js", img: exImg, category: "Backend" },
  { name: "MongoDB", img: mongoImg, category: "Backend" },
  { name: "JWT", img: jwtImg, category: "Backend" },

  { name: "VS Code", img: vsImg, category: "Tools" },
  { name: "Git", img: gitImg, category: "Tools" },
  { name: "GitHub", img: githubImg, category: "Tools" },
  { name: "npm", img: npmImg, category: "Tools" },
  { name: "Postman", img: postman, category: "Tools" },
  { name: "figma", img: figma, category: "Tools" },
  { name: "Vite", img: viteImg, category: "Tools" },
  { name: "Firebase", img: firebase, category: "Tools" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const filteredSkills = allSkills.filter(
    (skill) => skill.category === activeTab
  );

  return (
    <section
      id="skills"
      className="py-10 px-5 lg:px-20 bg-gray-50 dark:bg-transparent text-gray-800"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
          My Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {["Frontend", "Backend", "Tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="card example-5 justify-center items-center flex-col dark:text-blue-800 bg-indigo-100 dark:bg-indigo-200"
            >
              <svg
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                <img
                  className="w-16 h-16 m-4 dark:bg-gray-200"
                  src={skill.img}
                  alt={skill.name}
                />
                <h3 className="text-center font-bold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
