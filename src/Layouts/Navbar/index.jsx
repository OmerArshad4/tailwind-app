import { HiUser } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiBell } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';
// import Images from "../../../HelperMethods/ImgConstants";
import { useCallback, useEffect, useRef, useState } from "react";
import { customLogout } from "../../Redux/features/Auth/authSlice";
import InputField from "../../Shared/InputField";

const Navbar = ({ toggleSidebar }) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const LogOut = useCallback(() => {
    dispatch(customLogout());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full h-16  flex justify-between items-center px-4 md:px-10 sticky top-0 z-50 bg-white dark:bg-gray-900">
      <InputField className="max-w-[292px]" placeholder ="search"/>

           <div className="flex items-center gap-4">
          {/* Help Icon */}
          <BsQuestionCircle className="text-[#F9837C] text-xl cursor-pointer" />

          {/* Notification Bell with Red Dot */}
          <div className="relative">
            <FiBell className="text-[#F9837C]  text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </div>
        </div>
          <GiHamburgerMenu
            size={30}
            onClick={toggleSidebar}
            className="text-black active:text-[#0052DE] block lg:hidden"
          />

          {showMenu && (
            <div
              className="py-2 px-2 rounded-sm bg-[#151D20] absolute top-[68px] right-14 flex flex-col items-start space-y-2 z-40"
              ref={menuRef}
            >
              <Link
                to="/signIn"
                onClick={LogOut}
                className="text-white hover:bg-[#0052DE] ps-4 pr-14 py-2 rounded-sm text-semibold cursor-pointer w-full text-left"
              >
                <TbLogout size={20} className="inline mr-2" />
                LogOut
              </Link>
            </div>
          )}
      
      </div>
    </>
  );
};

export default Navbar;
