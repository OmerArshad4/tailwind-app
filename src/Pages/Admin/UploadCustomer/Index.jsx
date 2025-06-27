import { useState } from "react";
import { FaFileCsv } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import CustomBtn from "../../../Shared/CustomBtn";

export default function UploadCustomer() {
  const [autoGenerate, setAutoGenerate] = useState(false);

  return (
    <div className="m-4 md:m-8 lg:mx-12">
      <SectionHeader
        title="Upload Customers"
        subtitle="View 7-day scheduled tasks"
      />
      <div className="max-w-3xl  mt-10 p-6  bg-white border border-[#E2E8F0] rounded-lg shadow-sm px-5 py-4 gap-1">
        <h2  className="font-dm-sans font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[24px] tracking-[-0.015em] text-[#020817] mb-4">
          CSV File Upload
        </h2>

        <label   className="font-oswald font-medium text-base leading-[20px] tracking-[0.01em] text-black/90 mb-4">
          Select CSV File
        </label>
      

        <div className="border border-gray-300 border-dashed rounded-md p-6 text-center text-gray-500 cursor-pointer hover:border-teal-500 transition">
          <FaFileCsv className="mx-auto text-teal-700 text-3xl mb-2" />
          <span className="text-sm">Drag & Drop or Choose File</span>
        </div>

        <p className="font-dm font-normal text-[14px] leading-[20px] text-[#6B7280] mt-4">
          Only CSV files allowed. Max size: 5MB.
        </p>

        <div className="mt-4 flex items-center space-x-2">
          <input
            id="autoGenerate"
            type="checkbox"
            checked={autoGenerate}
            onChange={() => setAutoGenerate(!autoGenerate)}
           className="w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#000000b3]"
          />
          <label htmlFor="autoGenerate" className="font-dm font-normal text-[14px] leading-[20px] text-[#020817]">
            Auto-generate pseudo emails and Upload IDs
          </label>
        </div>
        <CustomBtn text="    Upload & Process file"  className = "my-3"/>

       
      </div>
    </div>
  );
}
