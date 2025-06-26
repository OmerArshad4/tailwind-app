// import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/style.css";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { memo, useEffect, useState } from "react";
const PhoneInputField = (props) => {
  const { name, error, value, label, required, className, setFieldValue } =
    props;

  const [tempValue, setTempValue] = useState(value || "");

  useEffect(() => {
    setTempValue(value || "");
  }, [value]);

  const handleInputChange = (value) => {
    if (value === "1") {
      setTempValue("");
      setFieldValue(name, "");
    } else {
      setTempValue(value);
      setFieldValue(name, value);
    }
  };

  return (
    <div className="w-full m-0 ">
      <label
        htmlFor="input"
        className="font-semibold mb-1 flex gap-x-1 text-stone-900"
      >
        {label}
        {required && (
          <FaAsterisk size={8} className="inline text-red-600 mb-2" />
        )}
      </label>
      <PhoneInput
        inputProps={{
          name: name,
          required: required,
          className: `py-3 w-full pl-12 rounded-sm transition-all hover:ring-[#0052DE] hover:ring-opacity-30 focus:outline-none focus:border-[#0052DE] focus:ring-[#0052DE] focus:ring-2 focus:ring-opacity-30 focus-visible:outline-none focus-visible:border-[#0052DE] focus-visible:ring-opacity-30 ${className}`,
        }}
        country={"us"}
        onlyCountries={["us"]}
        countryCodeEditable={false}
        masks={{ us: "... - ... - ...." }}
        value={tempValue}
        onChange={handleInputChange}
        className={`mt-1 flex items-center w-full text-black custom-phone-input rounded-sm border border-gray-300 transition-all hover:ring-[#0052DE] hover:ring-opacity-30 focus:outline-none focus:border-[#0052DE] focus:ring-[#0052DE] focus:ring-2 focus:ring-opacity-30 focus-visible:outline-none focus-visible:border-[#0052DE] focus-visible:ring-opacity-30`}
      ></PhoneInput>

      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default memo(PhoneInputField);
