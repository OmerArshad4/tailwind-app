import { TbCar } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import { TbCarGarage } from "react-icons/tb";
import { LuUserRoundCog } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { customLogout } from "../../Redux/features/Auth/authSlice";
import React, { memo, useCallback, useEffect, useState } from "react";

import {
  FaUserFriends,
  FaUpload,
  FaTasks,
  FaRobot,
  FaLink,
  FaRegFileAlt,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";
import Images from "../../HelperMethods/ImgConstants";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("");
  const { user } = useSelector((state) => state.user);

  const LogOut = useCallback(() => {
    dispatch(customLogout());
  }, []);

  const AdminPages = [
    {
      title: "Dashboard",
      link: "/admin/dashboard",
      icon: <MdOutlineSpaceDashboard size={22} />,
    },
    {
      title: "Upload Customers",
      link: "/admin/upload-customers",
      icon: <FaUpload size={22} />, // You can install or replace with your preferred upload icon
    },
    {
      title: "Customer List",
      link: "/admin/customer-list",
      icon: <FaUserFriends size={22} />,
    },
    {
      title: "View Tasks",
      link: "/admin/view-tasks",
      icon: <FaTasks size={22} />, // Replace with your preferred list icon
    },
    {
      title: "Bot Manager",
      link: "/admin/bot-manager",
      icon: <FaRobot size={22} />, // Optional: any bot icon you prefer
    },
    {
      title: "Contest URLs",
      link: "/admin/contest-urls",
      icon: <FaLink size={22} />,
    },
    {
      title: "Report & Logs",
      link: "/admin/reports",
      icon: <FaRegFileAlt size={22} />,
    },
    {
      title: "GDPR & Access",
      link: "/admin/gdpr-access",
      icon: <FaShieldAlt size={22} />,
    },
    {
      title: "Settings",
      link: "/admin/settings",
      icon: <LuSettings size={22} />,
    },
  ];

  const TechnicianPages = [
    {
      icon: <TbCar size={24} />,
      title: "Vehicles",
      link: "/technician/allVehicles",
    },
    {
      title: "Delivered Vehicles",
      icon: <IoCarSportOutline size={24} />,
      link: "/technician/deliveredVehicles",
    },
    {
      icon: <TbCarGarage size={24} />,
      title: "Assigned Vehicles",
      link: "/technician/assignedVehicles",
    },
  ];

  const sideBarLinks = user?.role === "admin" ? AdminPages : AdminPages;

  return (
    isSidebarOpen && (
      <div
        className={`bg-[#1A7F8B] h-full border-r border border-[#1A7F8B] justify-between fixed top-0 lg:top-16 transition-all w-64 overflow-y-auto z-50 `}
      >
        <div>
          <div className="block lg:hidden">
            <div className="flex justify-between items-center p-4">
              <h3 className="font-semibold text-xl">Sniffy Bot</h3>
              <RxCross2
                size={24}
                onClick={toggleSidebar}
                className=" text-gray-600 hover:bg-gray-300 hover:text-red-600"
              />
            </div>
          </div>

          <div className="p-6 border-b border-b-[#2F4D67]">
            <img
              src={Images.botLogo}
              alt="SniffyBot Logo"
              className="w-full sm:w-[200px] md:w-[179px] h-auto object-cover"
            />
          </div>

          <div className="flex flex-col p-4 space-y-4 border-b border-b-[#2F4D67]">
            {sideBarLinks.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`flex items-center p-3 space-x-3 w-full rounded-sm text-white ${
                  path === item.link
                    ? "text-white bg-[#2F4D67]"
                    : "text-gray-600 hover:text-white hover:bg-[#2F4D67]"
                }`}
              >
                {item.icon}
                <span className="font-normal text-base leading-6 text-white">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-[#2F4D67] flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>

          {/* User details */}
          <div className="flex flex-col">
            <span className="text-white font-medium text-sm">John Doe</span>
            <span className="text-white/60 text-sm">Admin</span>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(Sidebar);
