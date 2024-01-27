/* eslint-disable no-unused-vars */
import { useState } from "react";
import Adduser from "../components/Adduser";
import UsersTable from "../components/UsersTable";
import { Outlet, Route, Link } from "react-router-dom";
const Users = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center my-2">
        <h1
          className="mx-4 upp
       text-sm "
        >
          USERS / USERS TABLE
        </h1>
        <button
          onClick={() => setVisible(true)}
          className="px-4 mx-4 p-1 border rounded-md bg-primary
        
        text-white"
        >
          <Link to="adduser">Add User</Link>
        </button>
      </div>

      <UsersTable />
      <Outlet />
      {/* <Adduser onClose={()=>setVisible(false)}/> */}
    </div>
  );
};

export default Users;
