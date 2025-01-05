import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    // console.log(projectId);

    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);

    useEffect(() => {

        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCards(data);


                const card = data.find((item) => item.id === projectId);
                setCurrentCard(card);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [projectId]);


    return (
        <div className="p-10">
            <h2 className='text-xl font-bold mb-2'>Projects Details:</h2>
            {currentCard ? (
                <div>
                    <h3><span className='font-bold'>Title: </span> {currentCard.title}</h3>
                    <p><span className='font-bold'>Description: </span> {currentCard.description}</p>
                    <h3><span className='font-bold'>Technologies: </span> {
                        currentCard.technologies.map(item=><p key={currentCard.id}>{item}</p>)
                        }</h3>
                        <h3><span className='font-bold'>Github: </span>{currentCard.githublink}</h3>
                        <h3><span className='font-bold'>Live: </span>{currentCard.livelink}</h3>
                    <h3><span className='font-bold'>Improvement: </span>Need to update design part.</h3>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div className='my-10 border-2 p-2'>
                <h1 className='text-xl font-bold mb-2'>Struggling to Build My Website</h1>
                <p>Building my website was more challenging than I expected. At first, getting the layout just right took a lot of time, as I had to balance design with functionality. Once I thought I had it, I tested it on mobile devices and realized it looked terrible. After hours of learning about responsive design, I finally got it to work well on all screens.

                    Then, performance became a problem. The site started loading slowly as I added more content. Through optimization techniques like image compression, I managed to speed it up. The hardest part was debugging – tracking down errors felt impossible at times. But persistence paid off, and I’m proud of the finished product. The journey taught me valuable lessons about design, performance, and testing.</p>
            </div>
        </div>
    );
};

export default Details;
