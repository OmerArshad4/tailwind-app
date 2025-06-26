import React from "react";
import UpateTimePeriodForm from "../../../Shared/Forms/UpdateTimePeriodForm";

const Settings = () => {
  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <h1 className="text-stone-900 font-semibold text-xl mb-4">Settings</h1>
      <div className="border border-gray-300 rounded-sm bg-white shadow-md">
        <h1 className="text-stone-900 font-semibold text-2xl px-6 mt-6 items-center">
          Settings
        </h1>
        <UpateTimePeriodForm />
      </div>
    </div>
  );
};

export default Settings;
