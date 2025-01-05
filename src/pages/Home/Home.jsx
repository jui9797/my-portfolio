import React from 'react';
import Banner from '../../components/Banner';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Education from '../../components/Education';

import Contact from '../../components/Contact';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Education></Education>
           
           <Contact></Contact>
        </div>
    );
};

export default Home;