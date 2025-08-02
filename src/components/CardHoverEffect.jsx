import { cn } from "../utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 py-4", className)}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-700 via-transparent to-blue-700 block  rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}></Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ item, className }) => {
  return (
    <div
      className={cn(
        "relative rounded-lg h-[250px] lg:h-[300px] overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02]  dark:border-white/[0.1] m-2",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${item?.image})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

      <div className="relative z-10 p-5 h-full flex  justify-between">
        <h2 className="text-xl font-semibold text-white">{item?.title}</h2>

        <div className="flex flex-col gap-2 justify-start items-end ">
          <button className="buttonBlue">
            <Link to={`/projects/${item?.id}`}>Details</Link>
          </button>
          <button className="relative flex h-[40px] w-16 items-center justify-center overflow-hidden bg-[#006BB3] font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
            <span className="relative z-10">
              <Link target="_blank" to={item?.livelink}>
                Live
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
