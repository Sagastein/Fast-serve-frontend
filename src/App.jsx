import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Overview, Users, Device } from "./pages";
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
          children: [
            {
              path: "adduser",
              element: <div>Add User</div>,
            },
          ],
        },
        {
          path: "device",
          element: <Device />,
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
