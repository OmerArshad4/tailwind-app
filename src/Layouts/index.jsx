import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const UserLayout = ({ isPrivate, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= 1024
  );

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-[#F6F5F3]">
      {/* Sidebar stays on the left */}
      {isPrivate && (
        <SideBar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      )}

      {/* Right side: Navbar + Page Content */}
      <div className={`flex-1 ${isPrivate ? "lg:ml-64" : ""}`}>
        {isPrivate && <Navbar toggleSidebar={toggleSidebar} />}

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
