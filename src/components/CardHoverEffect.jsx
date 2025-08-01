import { cn } from "../utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 py-4", className)}
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
                className="absolute inset-0 h-full w-fullbg-blue-600 block  rounded-lg"
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
        "relative rounded-lg h-[300px] overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.02]  dark:border-white/[0.1]",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${item?.image})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="relative z-10 p-5 h-full flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-white">{item?.title}</h2>

        <div className="flex gap-10 ">
          <button className="before:ease relative h-12 w-20 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg">
            <span className="relative z-10">
              <Link to={`/projects/${item?.id}`}>Details</Link>
            </span>
          </button>
          <button className="relative flex h-[50px] w-16 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
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
