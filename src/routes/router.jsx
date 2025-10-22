import { createBrowserRouter } from "react-router";
import Register from "../pages/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Register
  },
]);