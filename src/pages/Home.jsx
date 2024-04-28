import { Link, useLoaderData } from "react-router-dom";
import PopularDestinition from "../components/PopularDestinition";

import "./styles/Home.css";
import SpotCard from "../components/SpotCard";
import Slider from "../components/Slider";
const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <div className="text-white home h-[500px] md:h-screen flex flex-col justify-center items-center space-y-4">
        <h1 className="font-bold md:text-5xl text-3xl ">
          Your Journey Your Story
        </h1>
        <p className="text-2xl font-semibold ">
          Your Gateway to <span className="text-[#F7424F]">Adventure</span>
        </p>
        <p className="max-w-xl opacity-80 text-center">
          Discover the breathtaking landscapes and vibrant cultures of
          destinations around the globe with ExploreWorld. Whether you seek the
          thrill of outdoor adventures, the serenity of picturesque beaches, or
          the rich history of ancient civilizations, our curated travel
          experiences promise unforgettable memories.
        </p>
        <Link to="/planyourtravel">
          <button className="btn">Travel Plan</button>
        </Link>
      </div>
      <PopularDestinition></PopularDestinition>
      <div className="md:my-10 my-5 container mx-auto max-w-screen-xl">
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <h2 className="text-center md:text-3xl font-bold text-xl">Tourist Spots</h2>
        <p className="text-center opacity-90 md:pt-2">
          Some popular tourist spots where you can go , share your story with
          us.
        </p>
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <div className="md:mt-5 mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {spots.map((spot) => (
            <SpotCard key={spot._id} spot={spot}></SpotCard>
          ))}
        </div>
        {spots.length == 0 && (
          <div>
            <p className="text-red-600 font-bold text-center text-2xl">
              There has Data of any Tourist spots{" "}
            </p>
            <div className="flex justify-center items-center md:my-3">
              <div>
                <button
                  href="#_"
                  className=" relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    <Link to="/addtouristspot">Add Now</Link>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
