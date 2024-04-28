import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyList from "../pages/MyList";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";
import UpdateSpot from "../pages/UpdateSpot";

import Profile from "../pages/Profile";
import Gallery from "../pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/tourspots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/mylist",

        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/tourspots"),
      },
      {
        path: "/addtouristspot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltouristspot",
        element: (
          <PrivateRoute>
            <AllTouristSpot></AllTouristSpot>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/tourspots"),
      },
      {
        path: "/alltouristspot/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourspots/${params.id}`),
      },
      {
        path: "/updatespot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourspots/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      }
    ],
  },
]);
export default router;
