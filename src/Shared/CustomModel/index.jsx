import { RxCross2 } from "react-icons/rx";
import React, { useEffect, memo } from "react";

const Model = (props) => {
  const {
    icon,
    toggle,
    heading,
    buttonText,
    buttonFunc,
    description,
    buttonStyles,
    isOpen = false,
    cancleBtnStyles,
    cancelBtn = false,
    modelSize = "w-lg",
  } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full h-screen m-0 p-0">
        <div
          className={` ${modelSize} max-h-[90vh] overflow-y-auto rounded-xl p-1 bg-white relative border border-gray-400 m-4`}
        >
          <RxCross2
            size={32}
            onClick={toggle}
            className="hover:bg-stone-200 hover:text-red-600 rounded-md text-gray-600 p-1 absolute top-1 right-1 cursor-pointer"
          />
          <div className="p-4">
            <div className="flex justify-start space-x-6 items-center">
              <div className="text-start my-3"> {icon}</div>
              <h4 className="text-2xl font-semibold text-start text-stone-800">
                {heading}
              </h4>
            </div>

            <div className="text-sm text-gray-500 mt-2">{description}</div>

            <div className="flex gap-2">
              {cancelBtn && (
                <button
                  className={`border border-gray-400 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded-md mt-4 ${cancleBtnStyles}`}
                  onClick={toggle}
                >
                  Cancel
                </button>
              )}

              {buttonText && (
                <button
                  className={`text-white text-sm py-2 px-4 rounded-md mt-4 ${buttonStyles}`}
                  onClick={buttonFunc}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(Model);
