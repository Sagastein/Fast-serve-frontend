import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Overview, Users, Device } from "./pages";
import Profile from "./pages/Profile";
import Underdev from "./components/Underdev";
import Admin from "./routes/Admin";
import Adduser from "./components/Adduser";
import AccountSettings from "./components/profile/AccountSettings";
import UserDeposit from "./components/profile/UserDeposit";
import UserTransactions from "./components/profile/UserTransactions";

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
              element: <Adduser />,
            },
          ],
        },
        {
          path: "device",
          element: <Device />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
          children: [
            {
              path: "",
              element: <AccountSettings />,
            },
            {
              path: "deposit",
              element: <UserDeposit />,
            },
            {
              path: "trans",
              element: <UserTransactions />,
            },
          ],
        },
        {
          path: "*",
          element: <Underdev />,
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
