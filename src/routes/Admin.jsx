import { NavBar, SideBar } from "../components";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <main className="h-screen overflow-hidden flex">
      <SideBar />
      <section className="flex-1 border flex flex-col bg-slate-50">
        <NavBar />
        <Outlet />
      </section>
    </main>
  );
}

export default Admin;
