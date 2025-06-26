import { memo } from "react";
import Images from "../../HelperMethods/ImgConstants";

const AuthWrapper = (props) => {
  const { AuthForm } = props;
 

  return (
  <div className="grid sm:grid-cols-1 min-h-screen overflow-hidden">
  <div className="h-full w-full bg-gradient-to-br from-[#2F4D67] to-[#1A7F8B] flex items-center justify-center">
    {/* Centering wrapper */}
    <div className="flex flex-col items-center space-y-6">
      {/* Logo & Text */}
      <div className="text-center">
        <img
          src={Images.botLogo}
          alt="SniffyBot Logo"
          className="w-24 mx-auto mb-2"
        />
        <h1 className="text-white text-2xl font-bold">SniffyBot</h1>
        <p className="text-white text-sm italic">Automation System</p>
      </div>

      {/* Auth Form */}
      {AuthForm && <AuthForm length={5} />}
    </div>
  </div>
</div>

  );
};

export default memo(AuthWrapper);
