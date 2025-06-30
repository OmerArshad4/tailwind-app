import { HiUser } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiBell } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
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
        <InputField className="max-w-[292px]" placeholder="search" />

        <div className="flex items-center gap-4">
          {/* Help Icon */}
          <div className="text-gray-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8.00002C8.00002 6.79 9.79002 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
                fill="#898989"
              />
            </svg>
          </div>

          {/* Notification Bell with Red Dot */}
          <div className="relative text-gray-500">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5001 23C13.6001 23 14.5 22.1 14.5 21H10.5001C10.5001 22.1 11.4001 23 12.5001 23ZM18.9999 17V11.5C18.9999 8.43 16.8699 5.86 13.9999 5.18V4.5C13.9999 3.67 13.3299 3 12.4999 3C11.6699 3 10.9999 3.67 10.9999 4.5V5.18C8.12992 5.86 5.99993 8.43 5.99993 11.5V17L3.99994 19V20H20.9998V19L18.9999 17Z"
                fill="#898989"
              />
              <ellipse
                cx="20"
                cy="5"
                rx="3.99998"
                ry="4"
                fill="#F9837C"
                stroke="white"
                stroke-width="2"
              />
            </svg>
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
