import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import AddAToys from "../pages/AddAToys";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../authContext/PrivateRoute";
import Blog from "../pages/Blog";
import Loading from "../pages/Loading";
import AboutUs from "../components/AboutUs";
import ToyDetails from "../pages/ToyDetails";
import MyToys from "../pages/MyToys";
import ForgetPassword from "../pages/ForgetPassword";

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
        loader: () => fetch('/toys.json'),
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
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />
      },
      {
        path: "/auth/register",
        element: <Register />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ],
  },
]);
