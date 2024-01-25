import { FaRegUser } from "react-icons/fa";
import {
  TbDeviceMobileCharging,
  TbLayoutDashboard,
  TbExchange,
} from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

import { NavLink } from "react-router-dom";
function SideBar() {
  const links = [
    {
      id: 1,
      name: "overview",
      icon: <TbLayoutDashboard className="font-bold" />,
      link: "",
    },
    {
      id: 2,
      name: "users",
      icon: <FaRegUser className="font-bold" />,
      link: "users",
    },
    {
      id: 3,
      name: "device",
      icon: <TbDeviceMobileCharging className="font-bold" />,
      link: "device",
    },
    {
      id: 4,
      name: "transaction",
      icon: <TbExchange className="font-bold" />,
      link: "transaction",
    },
    {
      id: 5,
      name: "settings",
      icon: <CiSettings className="font-bold" />,
      link: "settings",
    },
  ];
  return (
    <div className="bg-white w-32 h-[90vh] flex flex-col  justify-between rounded-lg shadow-lg py-2">
      <div className=" grid gap-y-4">
        {links.map((link) => (
          <NavLink
            end
            to={link.link}
            key={link.id}
            className="flex hover:translate-x-2 group delay-200 duration-250 items-center capitalize w-full gap-2 p-2 px-4"
          >
            <span className="group-hover:text-blue-400">{link.icon}</span>

            <p className="text-xs font-bold group-hover:text-blue-400 text-slate-600">
              {link.name}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <IoIosLogOut className="font-bold " />
        <button>logout</button>
      </div>
    </div>
  );
}

export default SideBar;
