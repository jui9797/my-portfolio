import { useEffect, useState } from "react";

import { HoverEffect as CardHoverEffect } from "../../components/CardHoverEffect";
const ProjectsCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div id="projects" className="my-5 lg:my-20 py-10 px-5 lg:px-20">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-blue-600">
        My Top Projects
      </h2>
      <p className="text-center text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Here are some of the standout projects I’ve worked on. Each one
        highlights different skills, technologies, and problem-solving
        approaches I’ve applied throughout my development journey.
      </p>

      <div className="p-2 lg:p-4">
        <CardHoverEffect items={cards} className={"mt-6"}></CardHoverEffect>
      </div>
    </div>
  );
};

export default ProjectsCard;
