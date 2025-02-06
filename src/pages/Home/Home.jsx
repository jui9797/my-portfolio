
import Banner from '../../components/Banner';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import ProjectsCard from '../projects/ProjectsCard'
import Contact from '../../components/Contact';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Education></Education>
           <ProjectsCard></ProjectsCard>
           <Contact></Contact>
        </div>
    );
};

export default Home;