import React, { memo } from "react";
import { FaAsterisk } from "react-icons/fa";

const CheckboxInputField = (props) => {
  const {
    name,
    error,
    label,
    onBlur,
    checked,
    onChange,
    mainClass,
    required = false,
  } = props;

  return (
    <div className={`w-full ${mainClass}`}>
      <div className="flex items-center gap-x-2">
        <input
          id={name}
          name={name}
          type="checkbox"
          onBlur={onBlur}
          checked={checked}
          required={required}
          onChange={onChange}
          className="h-4 w-4 cursor-pointer"
        />
        <label htmlFor="input" className="font-semibold flex gap-x-1 text-sm">
          {label}
          {required && (
            <FaAsterisk size={8} className="inline text-red-600 mb-2" />
          )}
        </label>
      </div>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default memo(CheckboxInputField);
