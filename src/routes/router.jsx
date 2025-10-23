import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import AddAToys from "../pages/AddAToys";
import MyProfile from "../privateLayout/MyProfile";
import ToyDetails from "../privateLayout/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../authContext/PrivateRoute";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: ()=>fetch('/toys.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddAToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ],
  },
]);
