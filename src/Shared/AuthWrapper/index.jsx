import { memo } from "react";
import Images from "../../HelperMethods/ImgConstants";
import StatusCard from "../StatusCard/Index";
import { FaRegFolderClosed } from "react-icons/fa6";

const AuthWrapper = (props) => {
  const { AuthForm } = props;

  return (
    <div className="grid bg-black sm:grid-cols-1 min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${Images.authBackground})` }}
        className="h-full w-full bg-cover bg-center flex items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <div className="text-center">
            <img
              src={Images.botLogo}
              alt="SniffyBot Logo"
              className="w-full sm:w-[200px] md:w-[279px] h-auto object-cover"
            />
            <h1 className="font-oswald font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[48px] text-center text-white">
              SniffyBot
            </h1>
            <p className="font-oswald font-normal text-[18px] sm:text-[20px] leading-[24px] text-center text-white">
              Automation System
            </p>
          </div>

          {AuthForm && <AuthForm length={5} />}
        </div>
      </div>
    </div>
  );
};

export default memo(AuthWrapper);
