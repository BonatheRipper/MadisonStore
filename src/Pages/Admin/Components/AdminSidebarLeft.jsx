import React from "react";
import { LeftSideBarBtn } from "./LeftSideBarBtn";
import { MdDashboard } from "react-icons/md";
import { GrProductHunt } from "react-icons/gr";
import { MdNotes } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";

import { useStateContext } from "../../../context/Statecontext";

const AdminSidebarLeft = ({}) => {
  const { Adminsidebar, setAdminSidebar, themeBG } = useStateContext();

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
          <LeftSideBarBtn text="Pages" icon={<MdNotes />} link="/admin/pages" />
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
