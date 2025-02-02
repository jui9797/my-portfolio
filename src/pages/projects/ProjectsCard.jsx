import { useEffect, useState } from 'react';
import Card from './Card';
import { Typewriter } from 'react-simple-typewriter';


const ProjectsCard = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, []);
    return (
        <div className='my-5 lg:my-20 py-10'>
            <h2 className='hidden lg:flex text-xl lg:text-4xl text-center text-blue-500 font-bold my-4'>
                <span className="text-blue-500">
                    <Typewriter
                        words={["My Projects"]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>

            </h2>
            <p className='flex text-blue-600 font-bold lg:hidden'>projects</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    cards.map((card, index) => <Card key={index} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default ProjectsCard;