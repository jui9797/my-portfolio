import { useEffect, useState } from "react";
import Card from "./Card";
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
    <div id="projects" className="my-5 lg:my-20 py-10 border-2 border-red-600">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-blue-600">
        My Top Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <Card key={index + 1} card={card}></Card>
        ))}
      </div>
      <div className="p-2 lg:p-4">
        <CardHoverEffect items={cards} className={"mt-10"}></CardHoverEffect>
      </div>
    </div>
  );
};

export default ProjectsCard;
