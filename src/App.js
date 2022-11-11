import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddService from "./Component/Admin/AddService";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import PrivateRouter from "./Component/Router/PrivateRouter";
import Main from "./Layout/Main";
import Blog from "./Screen/Blog";
import Home from "./Screen/Home";
import MyReview from "./Screen/MyReview";
import Services from "./Screen/Services";
import SingleFood from "./Screen/SingleFood";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/services",

        element: <Services />,
      },
      {
        path: "/blog",

        element: <Blog />,
      },
      {
        path: "/my-review",

        element: (
          <PrivateRouter>
            <MyReview />
          </PrivateRouter>
        ),
      },
      {
        path: "/single-food/:id",
        loader: ({ params }) =>
          fetch(`https://assi11server.vercel.app/api/food/${params.id}`),
        element: <SingleFood />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRouter>
            <AddService />
          </PrivateRouter>
        ),
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
