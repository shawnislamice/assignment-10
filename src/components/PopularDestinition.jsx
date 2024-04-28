import popular1 from '../assets/popular1.webp'
import popular2 from '../assets/popular 2.jpg'
import popular3 from '../assets/popular 3.png'
import popular4 from '../assets/popular 4.jpg'
const PopularDestinition = () => {
    return (
      <div className="md:mb-20 md:mt-10 my-3 container mx-auto max-w-screen-xl">
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <h2 className="text-center md:text-3xl font-bold">Popular Destination</h2>
        <p className="text-center opacity-90 md:pt-2">Some popular destination where our travellers already visited</p>
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <div>
          <div className="flex justify-between items-center md:my-5 md:gap-5">
            <p className='md:w-1/2 text-justify'>
              Nestled in the delta of the Ganges, Brahmaputra, and Meghna
              rivers, the Sundarbans is the largest mangrove forest in the world
              and a UNESCO World Heritage Site. Home to the elusive Bengal tiger
              and a rich diversity of flora and fauna, this mystical forest
              offers visitors a chance to explore its winding waterways, lush
              greenery, and serene beauty. Stretching along the
              southeastern coastline of Bangladesh, Cox's Bazar boasts the
              world's longest natural sandy sea beach. With its golden sands
              stretching as far as the eye can see, bordered by the turquoise
              waters of the Bay of Bengal, Cox's Bazar is a paradise for beach
              lovers. Visitors can enjoy activities like swimming, sunbathing,
              and beachside picnics while soaking in the breathtaking coastal
              views.
            </p>
            <div className='md:w-1/2 flex gap-5 '>
                <img className='hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl relative top-8'  src={popular1} alt="" />
                <img className='hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl ' src={popular2} alt="" />
            </div>
          </div>
          <div className="flex md:flex-row-reverse  justify-between items-center md:mt-20 md:gap-5 md:mb-4">
            <p className='md:w-1/2 text-justify'>
              Nestled in the delta of the Ganges, Brahmaputra, and Meghna
              rivers, the Sundarbans is the largest mangrove forest in the world
              and a UNESCO World Heritage Site. Home to the elusive Bengal tiger
              and a rich diversity of flora and fauna, this mystical forest
              offers visitors a chance to explore its winding waterways, lush
              greenery, and serene beauty. Stretching along the
              southeastern coastline of Bangladesh, Cox's Bazar boasts the
              world's longest natural sandy sea beach. With its golden sands
              stretching as far as the eye can see, bordered by the turquoise
              waters of the Bay of Bengal, Cox's Bazar is a paradise for beach
              lovers. Visitors can enjoy activities like swimming, sunbathing,
              and beachside picnics while soaking in the breathtaking coastal
              views.
            </p>
            <div className='md:w-1/2 flex gap-5 '>
                <img className='hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl relative top-8'  src={popular3} alt="" />
                <img className='hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl ' src={popular4} alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
};

export default PopularDestinition;