import { FaStrava } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
function NavBar() {
  return (
    <aside className="flex justify-between">
      <section>
        <div className="flex gap-2">
          <FaStrava className="text-2xl" />
          <p>
            <span className="font-bold">FAST</span>
            <span className="text-rose-400 font-bold">SERVE</span>
          </p>
        </div>
      </section>
      <section className="flex dark:text-orange-400 items-center gap-x-4 text-xs">
        <div>
          <Switch
            defaultSelected
            size="sm"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <FaSun className={className} />
              ) : (
                <FaMoon className={className} />
              )
            }
          />
        </div>
        <div>
          <p>
            Hey,<b>Manager</b>
          </p>
          <p>Admin</p>
        </div>
        <Dropdown backdrop="blur">
          <DropdownTrigger className="hover:scale-90 cursor-pointer">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Static Actions"
            disabledKeys={["email"]}
          >
            <DropdownItem key="email">manager@gmail.com</DropdownItem>
            <DropdownItem key="edit">profile</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
    </aside>
  );
}

export default NavBar;
