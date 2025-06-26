import React, { memo } from "react";
import { FaAsterisk } from "react-icons/fa";

const Dropdown = (props) => {
  const {
    name,
    value,
    error,
    label,
    Options,
    disabled,
    required,
    mainClass,
    className,
    labelClass,
    placeholder,
    onBlurHandle,
    optionsStyling,
    onChangeHandle,
    showPlaceholder = true,
    placeholderDisabled = true,
  } = props;

  return (
    <div className={`m-0 text-black ${mainClass}`}>
      <label className={`font-semibold flex gap-x-1 ${labelClass} `}>
        {label}{" "}
        {required && (
          <FaAsterisk size={8} className="inline text-red-600 mb-2" />
        )}
      </label>
      <select
        className={`mt-1 border border-gray-300 p-3 pr-10 rounded-sm w-full transition-all hover:ring-[#0052DE] hover:ring-opacity-30 focus:outline-none focus:border-[#0052DE] focus:ring-[#0052DE] focus:ring-2 focus:ring-opacity-30 focus-visible:outline-none focus-visible:border-[#0052DE] focus-visible:ring-opacity-30 ${className}`}
        name={name}
        value={value}
        disabled={disabled}
        onBlur={onBlurHandle}
        onChange={onChangeHandle}
      >
        {showPlaceholder && (
          <option value="" disabled={placeholderDisabled}>
            {placeholder}
          </option>
        )}
        {Options &&
          Options?.map((item, index) => (
            <option
              key={index}
              value={item?.value}
              className={`text-black ${optionsStyling}`}
            >
              {item.label}
            </option>
          ))}
      </select>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default memo(Dropdown);
