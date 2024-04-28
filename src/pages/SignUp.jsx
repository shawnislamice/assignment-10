import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { username, email, password, photo } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        reset();
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photo,
        });
        navigate(location?.state || "/");
        window.location.reload();
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, password,createdAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="bg-[#FBFBFB] rounded-lg shadow-xl py-3 md:py-6 md:my-5 flex md:flex-row justify-around items-center gap-3 md:gap-6">
      <div className="md:w-[40%]">
        <div className=" p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign Up Now</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-red-500 dark:text-red-400">
                  This field is required
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 dark:text-red-400">
                  This field is required
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <p className="text-red-500 dark:text-red-400">
                  This field is required
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 dark:text-red-400">
                  This field is required
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 dark:text-red-400">
                  This field is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary  block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#F7424F] h-[calc(100vh-200px)] w-1/2 rounded-lg shadow-lg flex flex-col justify-center items-center md:space-y-4 space-y-2">
        <h1 className="text-5xl font-bold ">
          Hi, <span className="text-primary">There</span>
        </h1>
        <p className="opacity-75  font-semibold">Are You new here? </p>
        <p className="font-bold text-4xl">Sign Up Now</p>
        <h2>If you are already our member!</h2>
        <Link to="/login">
          <button className="btn btn-outline">Login Now </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
