// import { format } from "date-fns";
import { format } from "date-fns";
import React, { memo } from "react";
import { VEHICLE_STATUS_OPTIONS } from "../../Utils/constant";

const renderObject = (obj, allowedFields = []) => {
  return Object.entries(obj)
    .filter(
      ([key]) => allowedFields.length === 0 || allowedFields.includes(key)
    )
    .map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div
            key={key}
            className="bg-gray-200 rounded-xl p-4 col-span-2 md:col-span-3 lg:col-span-5"
          >
            <p className="text-gray-500 text-xs font-semibold mb-4">
              {key.toUpperCase()}
            </p>
            {Array.isArray(value)
              ? value.map((item, index) => (
                  <>
                    <p className=" font-semibold text-sm text-blue-600">
                      Part {index + 1}
                    </p>
                    <div
                      key={index}
                      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4 border border-gray-400 rounded-lg p-4"
                    >
                      {renderObject(item)}
                    </div>
                  </>
                ))
              : renderObject(value)}
          </div>
        );
      }

      return (
        <div key={key} className="bg-gray-100 rounded-xl p-2">
          <p className="text-gray-500 text-xs font-semibold">
            {key.toUpperCase()}
          </p>
          <p className="text-gray-700 font-semibold">
            {value === "" || value === null
              ? "--"
              : key.toLowerCase() === "deliverydate"
              ? format(new Date(value), "MM-dd-yyyy")
              : value}
          </p>
        </div>
      );
    });
};

const ExpandedCarDetails = ({ row }) => {
  const { data = {} } = row;
  return (
    <div className="border border-gray-300 m-4 p-4 rounded-xl space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3 bg-gray-100 rounded-xl p-4">
        {data?.make && data?.model && data?.year && data?.status && (
          <div className="col-span-2 md:col-span-3 lg:col-span-5">
            <h1 className="font-bold text-xl">
              {data?.make + " " + data?.model + " - " + data?.year}
            </h1>
            <p className="text-gray-600">
              Status:{" "}
              {VEHICLE_STATUS_OPTIONS.find(
                (item) => item.value === data?.status
              )?.label || data?.status}
            </p>
          </div>
        )}
        {renderObject(data)}
      </div>
    </div>
  );
};

export default memo(ExpandedCarDetails);
