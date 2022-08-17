import React, { useState } from "react";
import { LeftSideBarBtn } from "./LeftSideBarBtn";
import { MdDashboard } from "react-icons/md";
import { GrProductHunt } from "react-icons/gr";
import {
  MdNotes,
  MdContactSupport,
  MdMarkEmailRead,
  MdContactPhone,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

import { useStateContext } from "../../../context/Statecontext";

const AdminSidebarLeft = ({}) => {
  const { Adminsidebar, setAdminSidebar, themeBG } = useStateContext();
  const [dropdown, setDropdown] = useState(false);
  const productsDropDown = () => {
    return (
      <div
        onMouseLeave={() => setDropdown(false)}
        onMouseEnter={() => setDropdown(true)}
        className="w-full flex flex-col relative"
      >
        <div>
          <LeftSideBarBtn text="Pages" icon={<MdNotes />} link="/admin/" />
        </div>
        <div
          className={` ml-8 ${
            dropdown
              ? " visible z-10 translate-y-1 transition "
              : "invisible opacity-0 absolute top-full  left-0 w-full -translate-y-10 -z-10 transition  duration-100 "
          }`}
        >
          <LeftSideBarBtn
            text="Home"
            icon={<AiFillHome />}
            link="/admin/cms/welcome"
          />
          <LeftSideBarBtn
            text="About"
            icon={<MdContactSupport />}
            link="/admin/cms/about"
          />
          <LeftSideBarBtn
            text="Contact"
            icon={<MdContactPhone />}
            link="/admin/cms/contact"
          />
          <LeftSideBarBtn
            text="Subscription"
            icon={<MdMarkEmailRead />}
            link="/admin/cms/subscription"
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className={`${
          Adminsidebar ? "left-0" : "-left-80"
        } md:block fixed h-screen top-0  p-4 pt-16 w-80 z-40 ${themeBG}`}
      >
        <ul
          onClick={() => setAdminSidebar(!Adminsidebar)}
          className="flex flex-col p-4 justify-center items-center w-full"
        >
          <LeftSideBarBtn
            text="Dashboard"
            icon={<MdDashboard />}
            link="/admin"
          />
          <LeftSideBarBtn
            text="Products"
            icon={<GrProductHunt />}
            link="/admin/products"
          />
          {productsDropDown()}
          <LeftSideBarBtn
            text="Subscribers"
            icon={<IoIosPeople />}
            link="/admin/subscribers"
          />

          <LeftSideBarBtn
            text="Support"
            icon={<BiSupport />}
            link="/admin/support"
          />
          <LeftSideBarBtn
            text="Settings"
            icon={<FiSettings />}
            link="/admin/settings"
          />
        </ul>
      </div>
    </>
  );
};

export default AdminSidebarLeft;
