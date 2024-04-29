import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const AllTouristSpot = () => {
  const allSpots = useLoaderData();
  
  return (
    <div className="container mx-auto max-w-screen-xl md:my-5 my-3">
      <div>
        <hr className="md:my-3 my-2 border border-dashed" />
        <h1 className="text-2xl font-bold text-center">
          {" "}
          <Typewriter
            words={[
              "All Tourist Spot",
              "You Can Easily Find All Tourist Spots Here",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="max-w-md block mx-auto opacity-90  text-center md:pt-2">
          You can find all tourist spots which was added by all users
        </p>
        <hr className="md:my-3 my-2 border border-dashed" />
      </div>
      <div className="block mx-auto">
        <select className="block bg-secondary-content mx-auto select select-bordered w-full max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Average Cost</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:place-items-center lg:grid-cols-4 lg:gap-4">
        {allSpots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>

      {allSpots.length == 0 && (
        <div>
          <Helmet>
            <title>All Tourist Spot</title>
          </Helmet>
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
                  <Link to="/addtouristspot">Add Tourist Spot</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTouristSpot;
