import { NavBar, SideBar } from "../components";
import { Outlet } from "react-router-dom";

function Admin() {
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
