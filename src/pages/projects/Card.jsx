
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  return (
    <div>
      <div className=" bg-base-100 shadow-xl rounded-none ">
        <div className="h-[200px]">
          <img
            src={card.image}
            alt="Shoes"
            className=" h-full w-full" />
        </div>

        <div className="h-[200px] pt-4 flex flex-col items-center text-center bg-gray-100">
          <div className='h-[100px]'>
            <h2 className="text-xl font-bold mb-2 text-gray-600">{card.title}</h2>
            <p className='text-xs mb-1'></p>
          </div>

          <div className='flex gap-10 '>
            <button  className="before:ease relative h-12 w-20 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
              <span className="relative z-10"><Link to={`/projects/${card.id}`}>Details</Link></span>
            </button>
            <button className="relative flex h-[50px] w-16 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
              <span className="relative z-10"><Link target='_blank' to={card.livelink}>Live</Link></span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;