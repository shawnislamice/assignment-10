import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
const UpdateSpot = () => {
  const spot = useLoaderData();
  const [updatedData, setUpdatedData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const {
    averageCost,
    country,
    location,
    photo,
    season,
    shortDescription,
    touristSpotName,
    travelTime,
    _id,
    totalTravellers,
  } = spot;
  const onSubmit = (data) => {
    
   console.log(data);
  };

  return (
    <div className="container mx-auto max-w-screen-xl">
      <div>
        <section className="  rounded-xl dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className=" container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className=" grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Tourist Spot Name
                  </label>
                  <input
                    name="touristSpotName"
                    type="text"
                    defaultValue={touristSpotName}
                    placeholder="Where you want to go ?"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("touristSpotName", {
                      required: true,
                    })}
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    defaultValue={country}
                    placeholder="Country"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("country", { required: true })}
                  />
                  {errors.country && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    defaultValue={location}
                    placeholder="Enter your location where you want to go"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("location", { required: true })}
                  />
                  {errors.location && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Photo
                  </label>
                  <input
                    name="photo"
                    defaultValue={photo}
                    type="text"
                    placeholder="Enter your Photo URL"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("photo", { required: true })}
                  />
                  {errors.photo && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    defaultValue={shortDescription}
                    placeholder="Short Description"
                    className="textarea textarea-bordered textarea-sm w-full "
                    {...register("shortDescription", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.shortDescription && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Total Travelers Per Year
                  </label>
                  <input
                    type="text"
                    defaultValue={totalTravellers}
                    placeholder="Total Travelers Per Year"
                    name="totalTravelers"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("totalTravellers", {
                      required: true,
                    })}
                  />
                  {errors.totalTravellers && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">
                    Average Cost
                  </label>
                  <input
                    id="city"
                    type="text"
                    defaultValue={averageCost}
                    placeholder="Write about your budget"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("averageCost", { required: true })}
                  />
                  {errors.averageCost && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">
                    Which season you prefer
                  </label>
                  <select
                    defaultValue={season}
                    name="season"
                    className="select select-bordered w-full max-w-xs"
                    {...register("season", { required: true })}
                  >
                    <option disabled selected>
                      Seasonaility
                    </option>
                    <option>Summer </option>
                    <option>Winter</option>
                  </select>
                  {errors.season && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">
                    Travel Time
                  </label>
                  <input
                    defaultValue={travelTime}
                    name="travelTime"
                    type="text"
                    placeholder="Travel Time like 7 days"
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    {...register("travelTime", { required: true })}
                  />
                  {errors.travelTime && (
                    <p className="text-red-500 ">This field is required</p>
                  )}
                </div>
              </div>
            </fieldset>
            <div className="flex justify-center md:pb-5 pb-3">
              <button
                type="submit"
                onClick={()=>onSubmit()}
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Update Now
                </span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateSpot;
