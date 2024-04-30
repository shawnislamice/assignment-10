import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {
  const users = useLoaderData();
  const { user } = useContext(AuthContext);
  const loggedUser = users.find((item) => item.email == user.email);
  console.log(loggedUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const updatedUser = { name, photo };
    // updateProfile(auth.currentUser, {
    //   displayName: name,
    //   photoURL: photo,
    // })
    fetch(
      `https://assignment-10-server-sable-five.vercel.app/users/${loggedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container mx-auto max-w-screen-xl md:my-5 my-3">
      <div>
        <hr className="md:my-3 my-2 border border-dashed" />
        <h1 className="text-2xl font-bold text-center">
          {" "}
          <Typewriter
            words={["Update Profile", "You Can Update Your Profile From Here"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="max-w-md block mx-auto opacity-90  text-center md:pt-2">
          Update Your Profile from Here
        </p>
        <hr className="md:my-3 my-2 border border-dashed" />
      </div>
      <div>
        <section className="bg-[#FDBF60] rounded-lg p-6 dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className=" place-items-center grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className=" grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                    Name
                  </label>
                  <input
                    id="Name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    defaultValue={loggedUser?.displayName}
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Photo
                  </label>
                  <input
                    id="website"
                    type="text"
                    name="photo"
                    placeholder="https://"
                    defaultValue={loggedUser?.photoURL}
                    className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              </div>
            </fieldset>
            <button className="block mx-auto btn btn-outline" type="submit">
              Update Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateProfile;
