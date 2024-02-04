import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PrivetRoute from "./PrivetRoute";
import Loading from "./Loading";
import Services from "../Pages/Services";
import Booking from "../Pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Loading>
        <App />
      </Loading>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <PrivetRoute>
            <About />
          </PrivetRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: (
          <PrivetRoute>
            <Services />
          </PrivetRoute>
        ),
      },
      {
        path: "booking/:id",
        element: (
          <PrivetRoute>
            <Booking />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
export default router;
