import { useEffect, useState } from "react";
import Card from "./Card";
// import { Typewriter } from 'react-simple-typewriter';

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
    <div id="projects" className="my-5 lg:my-20 py-10">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center text-blue-600">
        My Top Projects
      </h2>
      {/* <h2 className='hidden lg:flex text-xl lg:text-4xl text-center text-blue-500 font-bold my-4'> */}
      {/* <span className="text-blue-500 text-center mb-4"> */}
      {/* <Typewriter
                        words={["My Exclusive Projects"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /> */}
      {/* </span> */}

      {/* </h2> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <Card key={index + 1} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
