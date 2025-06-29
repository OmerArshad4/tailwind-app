// import ToolTip from "../ToolTip";
import { memo, useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputField = (props) => {
  const {
    icon,
    rows,
    type,
    name,
    label,
    error,
    value,
    style,
    // toolTip,
    disabled,
    required,
    mainClass,
    className,
    placeholder,
    ToolTipClass,
    onBlurHandle,
    onChangeHandle,
    handleKeyPress,
    ToolTipArrowClass,
    iconPosition = "right",
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`${mainClass ?? 'w-full'}`}>
      <label
        htmlFor="input"
        className="font-semibold  text-base tabular-nums	leading-5 tracking-[0.01em] text-black/90 flex gap-x-1"
      >
        {label}
        {/* {required && (
          <FaAsterisk size={8} className="inline text-red-600 mb-2" />
        )} */}
        {/* {toolTip && (
          <ToolTip
            ToolTipText={toolTip}
            ToolTipClass={ToolTipClass}
            ToolTipArrowClass={ToolTipArrowClass}
          />
        )} */}
      </label>
      <div className="relative">
        <input
          id="input"
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          rows={rows}
          name={name}
          style={style}
          value={value}
          disabled={disabled}
          onBlur={onBlurHandle}
          placeholder={placeholder}
          onChange={onChangeHandle}
          onKeyDown={handleKeyPress}
          min={type === "number" ? 0 : ""}
          step={type === "number" ? "any" : ""}
          className={`mt-1 font-light text-base leading-5 tracking-[0.01em] 	align-middle tabular-nums text-black/65 rounded-lg  w-full py-3 border border-black/30 px-3 transition-all hover:ring-[#0052DE] hover:ring-opacity-30 focus:outline-none focus:border-[#2F4D67] focus:ring-[#2F4D67] focus:ring-2 focus:ring-opacity-30 focus-visible:outline-none focus-visible:border-[#2F4D67] focus-visible:ring-opacity-30 
          
          ${type === "password" ? "pr-14" : ""} ${className} ${
            type === "number" ? "appearance-none" : ""
          }`}
        />

        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-5 cursor-pointer"
          >
            {isPasswordVisible ? (
              <GoEyeClosed className="text-gray-600" />
            ) : (
              <GoEye className="text-gray-600" />
            )}
          </div>
        )}

        {icon && (
          <div
            className={`absolute cursor-pointer  ${
              iconPosition === "left" ? "left-4 top-3.5" : "right-4 top-5"
            }`}
          >
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default memo(InputField);
