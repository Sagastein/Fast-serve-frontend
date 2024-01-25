import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Overview, Users } from "./pages";
import Admin from "./routes/Admin";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
