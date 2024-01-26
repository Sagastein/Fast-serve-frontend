import { NavBar, SideBar } from "../components";
import { Outlet, Navigate } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

function Admin() {
  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  } else {
    <Navigate to="/admin" />;
  }
  return (
    <main className="space-y-2  ">
      <NavBar />
      <section className="flex  gap-4 border">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Admin;
