import { memo } from "react";

const FillBtn = (props) => {
  const {
    text,
    className,
    handleOnClick,
    type = "button",
    disabled = false,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleOnClick}
      className={`bg-[#207883] w-full  text-white font-bold md:py-3 py-2 md:px-6 px-4 rounded shadow-md
         hover:bg-[#7aafb6]  disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out ${className} rounded-lg`}
    >
      {text}
    </button>
  );
};

export default memo(FillBtn);
