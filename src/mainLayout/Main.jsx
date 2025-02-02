
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeamsWithCollision';

const Main = () => {
    return (
        <BackgroundBeamsWithCollision>
        <div className='w-11/12 mx-auto'>
            
            <Navbar></Navbar>
           <div className='w-11/12 mx-auto min-h-[80vh]'>
                    <Outlet></Outlet>
            </div>
           <Footer></Footer>
            
           
        </div>
        </BackgroundBeamsWithCollision>
    );
};

export default Main;