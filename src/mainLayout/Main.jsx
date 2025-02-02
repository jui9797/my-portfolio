
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto lightbg-light-background dark:bg-dark-background'>
           <Navbar></Navbar>
           <div className='w-11/12 mx-auto min-h-[80vh]'>
                    <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;